const GIFEncoder = require('gifencoder');
const ParrotFramesReader = require("./ParrotFramesReader");
const ParrotFrameHandler = require("./ParrotFrameHandler");
const ParrotConfig = require("./ParrotConfig");
const ImageFactory = require("./ImageFactory");

function ParrotConstructor() {
    this.imageFactory = new ImageFactory();
    this.setBaseParrot("parrot");
}

ParrotConstructor.prototype.start = function(writeStream, configuration) {
    this.encoder = new GIFEncoder(this.parrotConfig.getWidth(), this.parrotConfig.getHeight());
    this.encoder.createReadStream().pipe(writeStream);
    this.encoder.start();
    this.encoder.setTransparent("#000000");
    this.encoder.setRepeat(0);
    this.encoder.setDelay(configuration.delay || 40);
    this.numberOfLoops = Math.ceil((configuration.colors ? configuration.colors.length : 1) / this.parrotConfig.getNumberOfFrames());
    this.colors = configuration.colors;
}

ParrotConstructor.prototype.setBaseParrot = function(parrotType) {
    this.parrotConfig = new ParrotConfig(parrotType);
}

ParrotConstructor.prototype.getFramesHandlers = function() {
    if(!this.parrotFrameHandlers) {
        this.initializeFramesHandlers();
    }
    return this.parrotFrameHandlers;
}

ParrotConstructor.prototype.initializeFramesHandlers = function() {
    const loadWhiteParrot = !!this.colors;
    const framesReader = new ParrotFramesReader(this.parrotConfig, loadWhiteParrot);

    const mapImageToFrameHandler = (image) => {
        var frameHandler = new ParrotFrameHandler(this.parrotConfig);
        frameHandler.addImage(image);
        return frameHandler;
    };
    const allImages = framesReader.getFrames().map((file) => {
        return this.imageFactory.fromFileSync(file);
    });

    let allFrameHandlers = [];

    for (let i=0; i<this.numberOfLoops; i++) {
        allFrameHandlers = allFrameHandlers.concat(allImages.map(mapImageToFrameHandler));
    }

    if (this.colors && this.colors.length > 0) {
        allFrameHandlers.forEach((frameHandler, i) => {
            frameHandler.applyColor(this.colors[i % this.colors.length]);
        })
    }

    this.parrotFrameHandlers = allFrameHandlers;
}

ParrotConstructor.prototype.addOverlayImage = function(overlay) {
    return this.imageFactory.get(overlay).then((image) => {
        this.getFramesHandlers().map(handler => {
            handler.addImage(image);
        });
    });
}

ParrotConstructor.prototype.addFollowingOverlayImage = function(overlay, offsetX, offsetY, width, height, flipX, flipY) {
    let followingFrames = this.parrotConfig.getFollowingFrames();

    if(this.parrotConfig.shouldFlipX()) {
        flipX = !flipX;
    }
    if(this.parrotConfig.shouldFlipY()) {
        flipY = !flipY;
    }

    return this.imageFactory.get(overlay).then((image) => {
        let imageHeight = parseInt(height || image.height);
        let imageWidth = parseInt(width || image.width);

        let frameHandler = function(handler, frame) {
            let shouldFlipX = frame.flipX ? !flipX : flipX;
            let shouldFlipY = frame.flipY ? !flipY : flipY;

            handler.addResizedImage(image, 
                                    flipPositionIfActivated(frame.x, imageWidth, shouldFlipY) + (offsetX || 0), 
                                    flipPositionIfActivated(frame.y, imageHeight, shouldFlipX) + (offsetY || 0), 
                                    flipSizeIfActivated(imageWidth, shouldFlipY), 
                                    flipSizeIfActivated(imageHeight, shouldFlipX));
        }

        this.getFramesHandlers().map((handler, index) => {
            let currentFrame = followingFrames[index];
            if (currentFrame.multiple) {
                currentFrame.multiple.forEach(frame => {
                    frameHandler(handler, frame);
                })
            } else {
                frameHandler(handler, currentFrame);
            }
        });
    });
}

function flipPositionIfActivated(currentPosition, size, flip) {
    return flip ? (currentPosition + size) : currentPosition;
}

function flipSizeIfActivated(currentSize, flip) {
    return flip ? currentSize * -1 : currentSize;
}

ParrotConstructor.prototype.finish = function() {
    this.getFramesHandlers().forEach(handler => {
        this.encoder.addFrame(handler.getFrame());
    });
    this.encoder.finish();
}

module.exports = ParrotConstructor;
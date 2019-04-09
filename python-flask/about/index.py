from flask import Flask, Response, __version__
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    name = path.upper()
    v = __version__
    return Response("<h1>%s on Flask v%s</h1><p>Visit the <a href='./'>home</a> page</p>" % (name, v), mimetype='text/html')

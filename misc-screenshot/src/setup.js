// const fs = require('fs');
// const tar = require('tar');
// const zstd = require('node-zstd').decompressStream;
const puppeteer = require('puppeteer');
// const config = require('./config');

const isBrowserAvailable = async (browser) => {
  try {
    await browser.version();
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

// const setupLocalChrome = () => new Promise((resolve, reject) => {
// console.log(config.chromeLibSrc);
// fs.createReadStream(config.chromeLibSrc)
// .on('error', reject)
// .pipe(zstd())
// .on('error', reject)
// .pipe(tar.x({
// C: config.chromeLibDst,
// }))
// .on('error', reject)
// .on('end', resolve);
// });

// const setupChrome = async () => {
// console.log('setup local chrome');
// await setupLocalChrome();
// console.log('setup done');
// };

exports.getBrowser = (() => {
  let browser;
  return async () => {
    if (typeof browser === 'undefined' || !await isBrowserAvailable(browser)) {
      // await setupChrome();
      browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--headless', '--disable-gpu', '-—disable-dev-tools', '--single-process'],
        dumpio: true,
        devtools: false,
      });
      console.log(`launch done: ${await browser.version()}`);
    }
    return browser;
  };
})();

const { parse } = require('url');

const { send } = require('micro');
const UrlPattern = require('url-pattern');

const { getBrowser } = require('./setup.js');

const pattern = new UrlPattern('/:url', {
  segmentValueCharset: 'a-zA-Z0-9-_./&?=%',
});

async function setup(handler) {
  let browser = null;
  // eslint-disable-next-line no-return-assign
  getBrowser().then(b => browser = b);
  return (req, res) => handler(req, res, browser);
}

module.exports = setup(async (req, res, browser) => {
  if (req.method !== 'GET') {
    return send(res, 501, 'Use a GET request');
  }
  const { pathname } = parse(req.url);
  const params = pattern.match(pathname);
  if (!params || !params.url) {
    return send(res, 400, 'A url needs to be passed in like /:url');
  }
  if (!browser) {
    return send(res, 503, 'Not Ready Yet. Booting up Chrome. Try again soon.');
  }
  if (params.url === 'favicon.ico') {
    return send(res, 404, 'No favicon set');
  }

  console.log('Taking a screenshot of', params.url);
  res.setHeader('Content-type', 'image/png');
  const page = await browser.newPage();
  await page.goto(`http://${params.url}`, { waitUntil: ['domcontentloaded', 'networkidle0'] });
  return page.screenshot();
});

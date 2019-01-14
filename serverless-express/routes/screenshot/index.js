const chrome = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

module.exports = async (req, res) => {
  async function getScreenshot(type) {
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });

    const page = await browser.newPage();
    await page.setCookie(req.cookies);
    await page.goto("https://serverless-express.now.sh/user-zone");
    const file = await page.screenshot({ type });
    await browser.close();
    return file;
  }
  const file = await getScreenshot("png");
  res.statusCode = 200;
  res.setHeader("Content-Type", `image/png`);
  res.end(file);
};

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.catchpoint.com');
  await page.screenshot({path: 'images/catchpoint.png'});

  browser.close();
})();
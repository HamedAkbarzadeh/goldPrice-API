import autoBind from "auto-bind";
import puppeteer from "puppeteer";
import dotenv from "dotenv";
dotenv.config();

class controller {
  constructor() {
    autoBind(this);
  }

  async initializePuppeteer({ url }) {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.BROWSER_ADDRESS,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1920 });
    await page.goto(url);

    return { browser, page };
  }
  async closeBrowserAndPage({ browser, page }) {
    await page.close();
    await browser.close();
  }

  response({ res, message, data, status = 200 }) {
    return res.status(status).json({ message, data });
  }
}

export default controller;

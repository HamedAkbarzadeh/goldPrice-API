import puppeteer from "puppeteer";
import controller from "../controller.js";
export default (class goldController extends controller {
  async gold18(req, res) {
    const { page, browser } = this.initializePuppeteer();
    await page.goto("https://www.kitco.com/gold-price-today-usa/");
  }
}());

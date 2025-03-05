import puppeteer from "puppeteer";
import controller from "../controller.js";
class goldController extends controller {
  async getGoldPrice_18(req, res) {
    const { page, browser } = await this.initializePuppeteer();
    await page.goto("https://www.tgju.org/");

    const price = await page.$eval("#l-geram18 .info-price", (element) => {
      return element.innerText;
    });
    const change = await page.$eval("#l-geram18 .info-change", (element) => {
      return element.innerText;
    });

    await page.close();
    await browser.close();
    this.response({
      res,
      message: "Success",
      data: {
        name: "طلا ۱۸ عیار",
        price,
        change,
      },
    });
  }
}
export default new goldController();

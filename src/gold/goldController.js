import puppeteer from "puppeteer";
import controller from "../controller.js";
class goldController extends controller {
  async getGoldDetails(req, res) {
    const { page, browser } = await this.initializePuppeteer({
      url: "https://www.tgju.org/",
    });

    const price = await page.$eval("#l-geram18 .info-price", (element) => {
      return element.innerText;
    });
    const change = await page.$eval("#l-geram18 .info-change", (element) => {
      return element.innerText;
    });

    this.closeBrowserAndPage({ browser, page });
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

  async getSekeeDetails(req, res) {
    const { page, browser } = await this.initializePuppeteer({
      url: "https://www.tgju.org/",
    });

    const price = await page.$eval("#l-sekee .info-price", (element) => {
      return element.innerText;
    });
    const change = await page.$eval("#l-sekee .info-change", (element) => {
      return element.innerText;
    });

    this.closeBrowserAndPage({ browser, page });
    this.response({
      res,
      message: "Success",
      data: {
        name: "سکه بهار آزادی",
        price,
        change,
      },
    });
  }
}
export default new goldController();

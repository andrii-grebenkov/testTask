import { $, browser, ExpectedConditions as EC } from "protractor";
import { BasePage } from "./basePage";

export class ProductItemPage extends BasePage {
  private buyButton = $('.detail-buy-btn button');

  async purchase(){
    await browser.wait(EC.visibilityOf(this.buyButton), 3000, 'Purchase button should appear but doesn\'t');
    return this.buyButton.click();
  }

}

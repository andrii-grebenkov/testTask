import { $, $$, browser, ExpectedConditions as EC} from "protractor";
import { CartItem } from "./cartItem";

export class CartModal {
  private modalContainer = $('.cart-popup');
  private items = $$('.cart-purchase-item');

  async getFirstItem() {
    await this.waitCartVisibility();
    const item = await this.items.first();
    return new CartItem(item);
  }
  async getItemsCount(){
    await this.waitCartVisibility();
    return $$('.cart-purchase-item').count();
  }

  private async waitCartVisibility(){
    return browser.wait(EC.visibilityOf(this.modalContainer), 5000, 'Cart should be displayed but don\'t');
  }
}

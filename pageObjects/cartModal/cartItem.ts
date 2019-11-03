import { ElementFinder } from 'protractor';

export class CartItem {
  private item: ElementFinder;
  private priceSelector = '.g-price-uah';
  private titleSelector = '.purchase-title';

  constructor(elem: ElementFinder) {
    this.item = elem;
  }

  async getTitle() {
    return this.item.$(this.titleSelector).getText();
  }

  async getPrice() {
    return this.item.$(this.priceSelector).getText();
  }
}

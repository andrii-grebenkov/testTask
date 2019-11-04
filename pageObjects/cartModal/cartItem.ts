import { ElementFinder } from 'protractor';

export class CartItem {
  private item: ElementFinder;
  private priceSelector = '.g-price-uah';
  private titleSelector = '.purchase-title';

  constructor(elem: ElementFinder) {
    this.item = elem;
  }

  getTitle() {
    return this.item.$(this.titleSelector).getText();
  }

  getPrice() {
    return this.item.$(this.priceSelector).getText();
  }
}

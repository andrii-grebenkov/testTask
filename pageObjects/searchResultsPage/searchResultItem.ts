import { ElementFinder } from 'protractor';

export class SearchResultItem {
  private item: ElementFinder;
  private priceSelector = '.g-price-uah';
  private titleSelector = '.g-i-tile-i-title';

  constructor(elem: ElementFinder) {
    this.item = elem;
  }

  getTitle() {
    return this.item.$(this.titleSelector).getText();
  }

  getPrice() {
    return this.item.$(this.priceSelector).getText();
  }

  select() {
    return this.item.click();
  }
}

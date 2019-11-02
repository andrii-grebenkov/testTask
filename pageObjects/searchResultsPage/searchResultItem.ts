import { ElementFinder } from "protractor";

export class SearchResultItem {
  private item: ElementFinder;
  private priceSelector = '.g-price-uah';
  private titleSelector = '.g-i-tile-i-title';

  constructor(elem: ElementFinder){
    this.item = elem;
  }

  async getTitle(){
    return this.item.$(this.titleSelector).getText();
  }

  async getPrice(){
    return this.item.$(this.priceSelector).getText();
  }

  async select(){
    return this.item.click();
  }
}

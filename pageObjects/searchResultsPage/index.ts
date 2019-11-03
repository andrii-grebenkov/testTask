import { BasePage } from '../basePage';
import { $$, browser, ExpectedConditions as EC } from 'protractor';
import { SearchResultItem } from './searchResultItem';

export class SearchResultsPage extends BasePage {
  private results = $$('.g-i-tile-i-box');

  async getFirstResult() {
    await browser.wait(EC.visibilityOf(this.results.first()), 5000, 'At least one result should appear but doesn\'t');
    const item = await this.results.first();
    return new SearchResultItem(item);
  }
}

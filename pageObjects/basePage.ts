import {$, browser, protractor} from 'protractor';
import { CartModal } from './cartModal';
const SIGNUP_LINK = 'https://my.rozetka.com.ua/ua/signup/';

export class BasePage {
  private searchField = $('input[class*="search"]');
  private languagePopupCloseButton = $('.popup-close');
  public cartModal = new CartModal();

  async search(inputText: string) {
    await this.searchField.sendKeys(inputText);
    //home page and others have different selectors -> use Key.Enter to avoid difference
    return this.searchField.sendKeys(protractor.Key.ENTER);
  }

  closeLanguagePopup() {
    this.languagePopupCloseButton.click();
  }

  proceedToSignupPage() {
    return browser.get(SIGNUP_LINK);
  }
}

import { $, browser, protractor, ExpectedConditions as EC } from "protractor";
import { CartModal } from "./cartModal";

export class BasePage {
  private searchField = $('input[class*="search"]');
  private languagePopupCloseButton = $('.popup-close');
  cartModal = new CartModal();

  async search(inputText: string) {
    await this.searchField.sendKeys(inputText);
    //home page and others have different selectors -> use Key.Enter to avoid difference
    return this.searchField.sendKeys(protractor.Key.ENTER);
  }

  async closeLanguagePopup() {
    this.languagePopupCloseButton.click();
  }
}

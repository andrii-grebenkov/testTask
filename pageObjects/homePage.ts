import { browser, $, ExpectedConditions as EC } from 'protractor';
import { BasePage } from './basePage';
const SIGNUP_LINK = 'https://my.rozetka.com.ua/ua/signup/';

export class HomePage extends BasePage {
  private logo = $('.header__logo');

  async open() {
    await browser.get('/');
    await browser.wait(EC.visibilityOf(this.logo), 3000, 'Logo should appear but doesn\'t');
  }

  proceedToSignupPage() {
    return browser.get(SIGNUP_LINK);
  }
}

import { browser, $, ExpectedConditions as EC } from "protractor";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  private logo = $('.header__logo');
  private signupLink = $('.main-auth__registration');

  async open() {
    await browser.get('/');
    await browser.wait(EC.visibilityOf(this.logo), 3000, 'Logo should appear but doesn\'t');
  }
  async proceedToSignupPage() {
    await browser.wait(EC.visibilityOf(this.signupLink), 3000, 'Signup link should appear but doesn\'t');
    return this.signupLink.click();
  }
}

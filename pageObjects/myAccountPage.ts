import {$, browser, ExpectedConditions as EC} from 'protractor';
import { BasePage } from './basePage';

export class MyAccountPage extends BasePage {
  private confirmationMessage = $('#personal_information_content .message');

  getConfirmationText() {
    return this.confirmationMessage.getText();
  }

  async isConfirmationMsgPresent() {
    await browser.manage().timeouts().implicitlyWait(3000);
    const isDisplayed = EC.visibilityOf(this.confirmationMessage)();
    await browser.manage().timeouts().implicitlyWait(0);
    return isDisplayed;
  }
}

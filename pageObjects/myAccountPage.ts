import { $ } from 'protractor';
import { BasePage } from './basePage';

export class MyAccountPage extends BasePage {
  private confirmationMessage = $('#personal_information_content .message');

  async getConfirmationText() {
    return this.confirmationMessage.getText();
  }

  async isConfirmationMsgPresent() {
    return this.confirmationMessage.isDisplayed();
  }
}

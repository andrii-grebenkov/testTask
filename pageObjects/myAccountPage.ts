import { $ } from 'protractor';
import { BasePage } from './basePage';

export class MyAccountPage extends BasePage {
  private confirmationMessage = $('#personal_information_content .message');

  getConfirmationText() {
    return this.confirmationMessage.getText();
  }

  isConfirmationMsgPresent() {
    return this.confirmationMessage.isDisplayed();
  }
}

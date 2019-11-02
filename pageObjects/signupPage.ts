import { $, browser, By, element, ExpectedConditions as EC } from "protractor";
import { BasePage } from "./basePage";

export class SignupPage extends BasePage {
  private title = element(By.name('title'));
  private login = element(By.name('login'));
  private password = element(By.name('password'));
  private signupButton = $('.signup-submit button');

  private async setTitle(title: string){
    return this.title.sendKeys(title)
  }

  private async setLogin(login: string){
    return this.login.sendKeys(login)
  }

  private async setPassword(password: string){
    return this.password.sendKeys(password)
  }

  async fillForm(title: string, login: string, password: string) {
    await browser.wait(EC.visibilityOf(this.signupButton), 3000, 'Signup form should appear but doesn\'t');
    await this.setTitle(title);
    await this.setLogin(login);
    await this.setPassword(password);
  }

  async submitForm(){
    return this.signupButton.click();
  }
}

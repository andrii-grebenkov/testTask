import { browser } from "protractor";
import { HomePage } from "../pageObjects/homePage";
import { SignupPage } from "../pageObjects/signupPage";
import { MailService } from "../services/mailService";
import { MyAccountPage } from "../pageObjects/myAccountPage";
import { SearchResultsPage } from "../pageObjects/searchResultsPage";
import { expect } from 'chai';
import { ProductItemPage } from "../pageObjects/productItemPage";

describe("User", async () => {
  const homePage = new HomePage();
  const signupPage = new SignupPage();
  const myAccountPage = new MyAccountPage();
  const searchResultsPage = new SearchResultsPage();
  const productItemPage = new ProductItemPage();
  const mailService = new MailService();
  const testTitle = 'TestUser';
  const testPassword = '1111securePASS';
  const testLogin = Math.random().toString(36).substring(7);
  const testEmail = mailService.getTestEmail(testLogin);

  before(async () => {
    await browser.driver.manage().window().maximize();
    await browser.waitForAngularEnabled(false);
  });

  it("should sign up successfully", async () => {
    await homePage.open();
    await homePage.proceedToSignupPage();

    await signupPage.fillForm(testTitle, testEmail, testPassword);
    await signupPage.submitForm();
    await signupPage.closeLanguagePopup();

    const confirmationLink = await mailService.getConfirmationLink(testLogin);
    await mailService.navigateByConfirmationLink(confirmationLink);

    const confirmationMessage = await myAccountPage.getConfirmationText();
    expect(confirmationMessage).to.equal('Адрес электронной почты подтвержден, спасибо', 'Confirmation message should appear but doesn\'t')
  });

  it("should add Apple iPhone X to cart successfully", async () => {
    await myAccountPage.search('Apple iPhone X');
    const firstResult = await searchResultsPage.getFirstResult();

    //remember title and price on search results page to compare against cart
    const srpTitleAndPrice = {
      title: await firstResult.getTitle(),
      price: await firstResult.getPrice()
    };

    await firstResult.select();
    await productItemPage.purchase();

    expect(await productItemPage.cartModal.getItemsCount()).to.be.above(0, 'Cart is empty but shouldn\'t');

    const firstCartItem = await productItemPage.cartModal.getFirstItem();
    const cartTitleAndPrice = {
      title: await firstCartItem.getTitle(),
      price: await firstCartItem.getPrice()
    };

    //expect(cartTitleAndPrice).to.deep.equal(srpTitleAndPrice);
    expect(cartTitleAndPrice.title).to.equal(srpTitleAndPrice.title, 'Title is different on SRP and Cart pages');
    expect(cartTitleAndPrice.price).to.equal(srpTitleAndPrice.price, 'Price is different on SRP and Cart pages');
  });
});

import * as rp from 'request-promise'
import { browser } from 'protractor';
const CONFIRMATION_LINK_REGEXP = /https.*confirmEmail.*confirm/;
const ENDPOINT = 'https://www.1secmail.com/api/v1/';
const DOMAIN = '1secmail.com';

export class MailService {
  private getRequestOptions(action: string, login: string, id?: number) {
    let uri = `${ENDPOINT}?action=${action}&login=${login}&domain=${DOMAIN}`;
    if (id) {
      uri += `&id=${id}`;
    }
    return {
      uri,
      json: true,
    }
  }

  getTestEmail(login: string) {
    return `${login}@${DOMAIN}`;
  }

  async getEmailList(login: string) {
    const requestOptions = this.getRequestOptions('getMessages', login);
    return rp(requestOptions);
  }

  async getEmail(login: string, id: number) {
    const requestOptions = this.getRequestOptions('readMessage', login, id);
    return rp(requestOptions);
  }

  async getEmailBody(email: any) {
    return email.body;
  }

  async getConfirmationLink(login: string) {
    let emails = [];
    await browser.wait(async () => {
      emails = await this.getEmailList(login);
      return !!emails.length;
    }, 10000);

    const emailId = emails[0].id;
    const email = await this.getEmail(login, emailId);
    const emailBody = await this.getEmailBody(email);
    return CONFIRMATION_LINK_REGEXP.exec(emailBody)[0];
  }

  async navigateByConfirmationLink(link: string) {
    return browser.get(link);
  }
}

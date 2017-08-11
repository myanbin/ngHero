import { browser, by, element } from 'protractor';

export class ngheroPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-navigate span')).getText();
  }
}

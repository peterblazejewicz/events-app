import { browser, element, by } from 'protractor';

export class EventsAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('events-root h1')).getText();
  }
}

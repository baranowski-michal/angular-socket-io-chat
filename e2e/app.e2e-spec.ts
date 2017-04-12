import { AngularSocketIoChatPage } from './app.po';

describe('angular-socket-io-chat App', () => {
  let page: AngularSocketIoChatPage;

  beforeEach(() => {
    page = new AngularSocketIoChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

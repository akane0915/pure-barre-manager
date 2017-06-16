import { PureBarreManagerPage } from './app.po';

describe('pure-barre-manager App', () => {
  let page: PureBarreManagerPage;

  beforeEach(() => {
    page = new PureBarreManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

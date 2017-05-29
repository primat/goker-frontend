import { GokerFrontendPage } from './app.po';

describe('goker-frontend App', () => {
  let page: GokerFrontendPage;

  beforeEach(() => {
    page = new GokerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

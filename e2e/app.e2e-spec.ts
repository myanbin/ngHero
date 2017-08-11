import { ngheroPage } from './app.po';

describe('nghero App', () => {
  let page: ngheroPage;

  beforeEach(() => {
    page = new ngheroPage();
  });

  it('should display navigate title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('梁山英雄管理中心');
  });
});

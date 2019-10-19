import { PoytersPage } from './app.po';

describe('poyters App', function() {
  let page: PoytersPage;

  beforeEach(() => {
    page = new PoytersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

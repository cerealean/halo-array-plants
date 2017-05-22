import { HaloArrayPage } from './app.po';

describe('halo-array App', () => {
  let page: HaloArrayPage;

  beforeEach(() => {
    page = new HaloArrayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { DemoNgLodashPage } from './app.po';

describe('demo-ng-lodash App', () => {
  let page: DemoNgLodashPage;

  beforeEach(() => {
    page = new DemoNgLodashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

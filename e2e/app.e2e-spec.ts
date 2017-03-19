import { Angular2AdminltePage } from './app.po';

describe('angular2-adminlte App', () => {
  let page: Angular2AdminltePage;

  beforeEach(() => {
    page = new Angular2AdminltePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

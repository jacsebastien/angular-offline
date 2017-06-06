import { ServiceWorkersTestPage } from './app.po';

describe('service-workers-test App', () => {
  let page: ServiceWorkersTestPage;

  beforeEach(() => {
    page = new ServiceWorkersTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

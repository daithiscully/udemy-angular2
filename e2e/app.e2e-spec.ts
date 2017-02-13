import { MyAngularAppPage } from './app.po';

describe('my-angular-app App', function() {
  let page: MyAngularAppPage;

  beforeEach(() => {
    page = new MyAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

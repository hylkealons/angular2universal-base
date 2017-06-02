import { Angular2universalBasePage } from './app.po';

describe('angular2universal-base App', () => {
  let page: Angular2universalBasePage;

  beforeEach(() => {
    page = new Angular2universalBasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

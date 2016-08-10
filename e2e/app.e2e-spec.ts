import { DeclarationsBugReproPage } from './app.po';

describe('declarations-bug-repro App', function() {
  let page: DeclarationsBugReproPage;

  beforeEach(() => {
    page = new DeclarationsBugReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { TriviaGeneratorPage } from './app.po';

describe('trivia-generator App', () => {
  let page: TriviaGeneratorPage;

  beforeEach(() => {
    page = new TriviaGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

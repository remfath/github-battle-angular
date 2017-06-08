import { GithubBattleAngularPage } from './app.po';

describe('github-battle-angular App', () => {
  let page: GithubBattleAngularPage;

  beforeEach(() => {
    page = new GithubBattleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

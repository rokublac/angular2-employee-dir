import { EmployeeDirectoryPage } from './app.po';

describe('employee-directory App', function() {
  let page: EmployeeDirectoryPage;

  beforeEach(() => {
    page = new EmployeeDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

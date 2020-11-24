describe('Protractor Demo App', function () {
  it('should add one and two', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://github.com/');
    element(by.id('user[login]')).sendKeys('skmuddamsetty');
    browser.sleep(5000);
  });
});

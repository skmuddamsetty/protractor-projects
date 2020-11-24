describe('element basics', () => {
  it('should behave...', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('3');
    element(by.model('second'))
      .sendKeys('5')
      .then(() => {
        browser.sleep(5000);
      });
  });
});

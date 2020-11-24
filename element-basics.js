describe('element basics', () => {
  it('should behave...', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();
    element(by.css("h2[class='ng-binding']"))
      .getText()
      .then((res) => {
        console.log(res);
      });
  });
});

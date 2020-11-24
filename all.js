describe('chain locators', () => {
  it('should behave...', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    element(by.model('first')).sendKeys(2);
    element(by.model('second')).sendKeys(3);

    element(by.id('gobutton')).click();
    expect(element.all(by.repeater('result in memory')).count()).toBe(2);
  });
});

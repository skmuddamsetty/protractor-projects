describe('chain locators', () => {
  it('should behave...', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();
    // repeater // chain locators and css for identical tags
    expect(
      element(by.repeater('result in memory'))
        .element(by.css('td:nth-child(3)'))
        .getText()
    ).toBe('3');
  });
});

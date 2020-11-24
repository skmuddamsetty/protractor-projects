describe('chain locators', () => {
  const add = (a, b) => {
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);

    element(by.id('gobutton')).click();
  };
  it('should behave...', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    add(1, 2);

    add(2, 3);
    expect(element.all(by.repeater('result in memory')).count()).toBe(2);

    element.all(by.repeater('result in memory')).each((item) => {
      item
        .element(by.css('td:nth-child(3)'))
        .getText()
        .then((res) => console.log(res));
    });
  });
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['chain-locators.js'],
  capabilities: {
    browserName: 'chrome',
  },

  framework: 'jasmine',
};

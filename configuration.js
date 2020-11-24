exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['re-usable-methods.js'],
  capabilities: {
    browserName: 'chrome',
  },

  framework: 'jasmine',
};

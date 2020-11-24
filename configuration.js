exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['spec1.js'],
  capabilities: {
    browserName: 'chrome',
  },

  framework: 'jasmine',
};

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['all.js'],
  capabilities: {
    browserName: 'chrome',
  },

  framework: 'jasmine',
};

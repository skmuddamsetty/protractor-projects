exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['element-basics.js'],
  capabilities: {
    browserName: 'chrome',
  },

  framework: 'jasmine',
};

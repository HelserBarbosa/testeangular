
exports.config = {
 seleniumAdress: 'http://localhost:4444/wd/hub',
 baseUrl :'http://localhost:4200', 
 specs: [
    './e2e/protractor/spec.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },

};

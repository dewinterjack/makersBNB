module.exports = {
  'test home page' : function (browser) {
    browser
      .url('http://localhost:9000/hello')
      .assert.containsText('body', 'Greetings')
  }
};
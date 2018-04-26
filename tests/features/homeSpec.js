
var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/makersbnb_test";
var space = require('../../models/spaces');
mongoose.connect(url);
var db = mongoose.connection;

module.exports = {
  beforeEach: function (browser, done) {
    space.remove({}, function (err) {
      console.log(err);
    });

    space.create({ spacename: 'makers', spaceaddress: '50-53 commercial street', spaceprice: '1,000,000', from: '04/07/18', to: '05/08/18', spacedescription: 'great place' });
    setTimeout(function () {
      // finished async duties
      done();
    }, 100);
  },

  'test viewing spaces': function (browser) {
    browser
      .url('http://localhost:9000/spaces')
      .assert.containsText('body', 'makers')
      .assert.containsText('body', '50-53 commercial street')
      .assert.containsText('body', '1,000,000')
      .end();
  },

  'test viewing an added space': function (browser) {
    browser
      .url('http://localhost:9000/spaces')
      .click('button[name=addspace')
      .pause(1000)
      .setValue('input[name=spacename]', 'buckingham palace')
      .setValue('input[name=spaceaddress]', 'westminster, london, sw1a 1aa')
      .setValue('input[name=spaceprice]', '2,000,000')
      .click('button[name=submitspace')
      .pause(1000)
      .assert.containsText('body', 'buckingham palace')
      .assert.containsText('body', 'westminster, london, sw1 1aa')
      .assert.containsText('body', '2,000,000');
  },

  'test adding a description to a space': function (browser) {
    browser
      .url();
  }
};
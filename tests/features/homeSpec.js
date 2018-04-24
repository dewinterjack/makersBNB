var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/makersbnb_test";
var place = require('../../models/places');
mongoose.connect(url);
var db = mongoose.connection;

module.exports = {
  beforeEach: function(browser, done) {
    delete db.models['Place'];
    place.create( { place_name: 'makers', address: '50-53 commerical street', price_per_night: '1,000,000' } );
    setTimeout(function() {
      // finished async duties
      done();
    }, 100);
  },

  'test viewing spaces' : function (browser) {
    browser
      .url('http://localhost:9000/spaces')
      .assert.containsText('makers')
      .assert.containsText('50-53 commerical street')
      .assert.containsText('1,000,000');
   },

   'test viewing an added space' : function (browser) {
    browser
      .url('http://localhost:9000/spaces')
      .click('button[name=addspace')
      .pause(1000)
      .setValue('input[name=spacename]', 'buckingham palace')
      .setValue('input[name=spaceaddress]', 'westminster, london, sw1a 1aa')
      .setValue('input[name=spaceprice]', '2,000,000')
      .click('button[name=submitspace')
      .pause(1000)
      .assert.containsText('buckingham palace')
      .assert.containsText('westminster, london, sw1 1aa')
      .assert.containsText('2,000,000');
   },

   'test adding a description to a space' : function(browser) {
     browser
     .url()
   }
};

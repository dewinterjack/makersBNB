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

  'test home page' : function (browser) {
    browser
      .url('http://localhost:9000/')
   }
};

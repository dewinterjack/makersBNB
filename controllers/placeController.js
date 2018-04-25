const Place = require('../models/places');

const async = require('async');

exports.find_all_places = function(req,res) {
  async.parallel({
    places: function(callback) {
      Place.find({}, callback);
    }
   },
  function(err, results) {
    for(let i in results.places) {console.log(results.places[i])};
    res.render('places', { places: results.places});
  });
};

exports.create_place = function(req, res) {
  Place.create({place_name: req.body.place_name, address: req.body.address, price_per_night: req.body.price_per_night, user_id: req.body.user_id});
}

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlacesSchema = new Schema(
  {
    place_name: String,
    address: String,
    price_per_night: String
  }
);

var Place = mongoose.model('Place', PlacesSchema);
exports.Place = Place;
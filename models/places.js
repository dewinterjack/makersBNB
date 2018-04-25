var mongoose = require('mongoose');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var PlaceSchema = new Schema(
  {
    place_name: String,
    address: String,
    price_per_night: String,
    user_id: ObjectId
  }
);

module.exports = mongoose.model('Place', PlaceSchema);

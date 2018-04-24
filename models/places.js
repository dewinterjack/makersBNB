var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlacesSchema = new Schema(
  {
    id: ObjectId,
    place_name: String,
    address: String,
    price_per_night: String,
    user_id: ObjectId
  }
)


var mongoose.model('Places', PlacesSchema); // Create Places model from places schema

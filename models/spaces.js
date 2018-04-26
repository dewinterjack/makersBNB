var mongoose = require('mongoose');
mongoose.set('debug', true);

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var SpaceSchema = new Schema(
  {

    spacename: String,
    spaceaddress: String,
    spaceprice: String,
    spacedescription: String,
    from: String,
    to: String,
    user_id: ObjectId
  }
);

module.exports = mongoose.model('Space', SpaceSchema);
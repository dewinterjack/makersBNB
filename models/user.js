var mongoose = require('mongoose');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema(
	{
		username: String,
		email: String,
		password: String,
		places: {type: Array, "default" : []}
	}
);

module.exports = mongoose.model('User', UserSchema);

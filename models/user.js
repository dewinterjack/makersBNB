var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema(
	{
		email: String,
		password: String,
		places: {type: Array, "default" : []}
	}
);

// generating a hash
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);

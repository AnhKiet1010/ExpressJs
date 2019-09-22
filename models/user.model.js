var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	email: String,
	password: String,
	phone: String,
	avatar: String
});

var user = mongoose.model('User', userSchema, 'users');

module.exports = user;
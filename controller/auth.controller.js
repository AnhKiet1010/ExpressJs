var db = require('../db');
var md5 = require('md5');

module.exports.login = function(req,res) {
	res.render('auth/login');
};

module.exports.postLogin = function(req,res) {
	var email = req.body.email;
	var password = md5(req.body.password); // ma hoa pass user gui len voi md5

	var user = db.get('users').find({email: email}).value();

	if(!user) {
		res.render('auth/login', {
			errors: [
				'User does not exist!'
			],
			values: req.body
		});
		return;
	}

	if(user.password !== password) {
		res.render('auth/login', {
			errors: [
				'Wrong password!'
			],
			values: req.body
		});
		return;
	}
	res.cookie('userId', user.id , {
		signed: true
	});
	res.redirect('/users');
};
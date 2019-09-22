var Users = require('../models/user.model');

module.exports.index = function(req,res) {
	res.render('users/index' , {
		users: db.get('users').value()
	});
};

module.exports.search = async function(req,res) {
	var q = req.query.q;
	var users = await Users.find();
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	})
	res.render('users/index', {
		users: matchedUsers
	});
};

module.exports.postCreate = function(req,res) {
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.split('\\').slice(1).join('\\');
	db.get('users').push(req.body).write();
	res.redirect('/users');
};

module.exports.create = function(req,res) {
	res.render('users/create');
};

module.exports.view = async function(req,res) {
	var id = req.params.id;
	var users = await Users.find();
	var user = users.find({ id: id }).value();

	res.render('users/view', {
		user: user
	});
};
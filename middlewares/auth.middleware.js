var db = require('../db');

module.exports.requireAuth = function(req,res,next) {
	if(!req.signedCookies.userId) {
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({
		id : req.signedCookies.userId
		}).value();
	if(!user) {
		res.redirect('/auth/login');
		return;
	}
	res.locals.user = user; // de su dung bien sang view(chi ton tai trong 1 vong doi res req ko anh huong toi ca res khac)
	next();
};
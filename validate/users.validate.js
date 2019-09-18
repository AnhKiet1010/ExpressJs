module.exports.postCreate = function(req,res,next) {
	var errors = [];
	if(!req.body.name) {
		errors.push('user name is riqured.');
	}

	if(!req.body.phone) {
		errors.push('phone is required.')
	}

	if(errors.length) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		});
		return;
	}

	res.locals.success = true;

	next(); // nho phai co next() neu ko trinh duyet se quay mai~
}
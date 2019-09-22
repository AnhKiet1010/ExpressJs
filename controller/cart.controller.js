var db = require('../db');

module.exports.addToCart = function(req,res,next) {
	var productId = req.params.productId;

	var sessionId = req.signedCookies.sessionId;

	if(!sessionId) {
		res.redirect('/products');
		return
	}

	var count = db
			.get('session')
			.find({id: sessionId})
			.get('cart.' + productId, 0)
			.value();

	db.get('session')
		.find({id: sessionId})
		.set('cart.' + productId ,count + 1)
		.write();

	var cart = db.get('session')
				.find({id: sessionId})
				.get('cart').value();
	var total = 0;
	for(key in cart) {
   		total+=cart[key]
	}
	res.locals.count = total;
	res.redirect('/products');
}
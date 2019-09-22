var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var product = mongoose.model('Product', productSchema, 'products');

module.exports = product;
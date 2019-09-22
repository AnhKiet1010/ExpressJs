var express = require('express');

var router = express.Router();
var controller = require('../controller/product.controller');

router.get('/products', controller.product);

module.exports = router;
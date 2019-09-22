var express = require('express');

var controller = require('../controllers/product.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/', controller.delete);

module.exports = router;

var express = require('express');
var multer  = require('multer');

var router = express.Router();

var upload = multer({ dest: './publics/uploads/' });

var controller = require('../controller/user.controller');
var validate = require('../validate/users.validate');
var middleware = require('../middlewares/auth.middleware');

router.get('/',middleware.requireAuth,  controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create',
	upload.single('avatar'),
	validate.postCreate,
	controller.postCreate
	);

router.get('/:id', controller.view);

module.exports = router;
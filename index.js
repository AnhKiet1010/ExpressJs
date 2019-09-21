require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var port = 3000;

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('publics')); // lay file tinh~

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET)); // tao 1 secret string
app.use(sessionMiddleware);
app.use(csurf({ cookie: true }));

app.get('/', function(req,res) {
	res.render('index', {
		name :'Kiet'
	});
});

app.use('/auth', authRoute);

app.use('/users',authMiddleware.requireAuth, userRoute);

app.use('/products', productRoute);

app.use('/cart', cartRoute);

app.use('/transfer',authMiddleware.requireAuth, transferRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
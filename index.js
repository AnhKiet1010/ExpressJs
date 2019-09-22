require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var port = 3000;

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');
var transferRoute = require('./routes/transfer.route');
var apiJson = require('./API/route/product.route');

// var sessionMiddleware = require('./middlewares/session.middleware');

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('publics')); // lay file tinh~

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET)); // tao 1 secret string

app.get('/', function(req,res) {
	res.render('index', {
		name :'Kiet'
	});
});

// app.use('/auth', authRoute);

app.use('/users', userRoute);

app.use('/products', productRoute);

app.use('/cart', cartRoute);

app.use('/transfer', transferRoute);

app.use('/api' , apiJson);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var port = 3000;

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.middleware');

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('publics')); // lay file tinh~

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('djhawh2323dwada')); // tao 1 secret string

app.get('/', function(req,res) {
	res.render('index', {
		name :'Kiet'
	});
});

app.use('/auth', authRoute);

app.use('/users',authMiddleware.requireAuth, userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
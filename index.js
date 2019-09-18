var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;

var userRoute = require('./routes/user.route');

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('publics')); // lay file tinh~

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
	res.render('index', {
		name :'Kiet'
	});
});

app.use('/users', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(8080, console.log('Started server at http://localhost:8080'));

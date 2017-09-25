var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var db = require('../database/index');



var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.use(parser.urlencoded());

app.get('/', function(req,res) {
	res.send('sssssssssss');
});

app.post('/', function(req, res) {
  console.log(req.body);
  var newUser = db.User({
    username: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err) {
  	if (err) {
  	  console.log(err);
  	}
  });
  res.redirect('/');
})

app.listen(3000, function() {
  console.log(`teneh el7azenh`);
});



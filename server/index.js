var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var db = require('../database/index');



var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(morgan('dev'));
app.use(parser.urlencoded({extended : false}));


// app.get('/', function(req,res) {
//   db.find({},function(err,res){
//     if(err)
//     {res.send(res);}
//   })
// 	res.send(res);
// });

app.post('/', function(req, res) {
  console.log(req.body);
  var newBook = db.Book({
    author: req.body.author,
    title: req.body.title
  });
  newBook.save(function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.render('/');
})

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
  res.render('/');
})




app.listen(3000, function() {
  console.log(`the server work`);
});



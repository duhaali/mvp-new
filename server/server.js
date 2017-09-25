var express = require('express');
var morgan = require('morgan');
var React = require('react');
var ReactDOM = require('react-dom')

var app=express()
app.use(morgan('dev'));
app.use()

app.get('/',function(req,res){
	res.send('sssssssssss');
})
 
app.listen(3000, function() {
  console.log(`teneh el7azenh`);
});



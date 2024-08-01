var express = require('express');
var app = express();
app.get('/home',function(req,res){
	res.send('welcome to home page');
});
app.post('/contact',function(req,res){
	res.send('welocome to express page');
});
app.all('/test',function(req,res){
	res.send('welocome to express home page');
});
app.listen(3000);
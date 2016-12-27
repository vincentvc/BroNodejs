process.env.NODE_ENV = 'localtest'; // comment it if depoly
var express = require('express');
var lodash = require('lodash');
var methodoverride = require("method-override");
var mongoose = require('./config/mongodb');
var noderestful = require("node-restful");
var config = require('./config/config');
var bodyparser = require('body-parser');
var app = express();
var logger = require('./config/logger'); 

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(methodoverride('X-HTTP-Method-Override'));
app.set('views', './app/view');
app.set('view engine', 'ejs');
app.use(function(req,res,next){

	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();

});

app.use(express.static(require('path').resolve('./public')));

mongoose.connection.once('open',function(){
	app.listen(config.bro.serverConfig.serverPort);
	console.log("Server listening at "+ config.bro.serverConfig.serverPort )
})


app.use(require('./app/routes/index.server.route'));

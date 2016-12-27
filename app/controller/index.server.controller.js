var logger = require('../../config/logger'); 
var mongoose = require('mongoose');


exports.initPage = function(req,res){

	console.log('here' + req.body);
	res.render('index', {title:
		'BroJJ'
	});

};

// module.exports = {
// 	initPage
// }
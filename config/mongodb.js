var mongoose = require('mongoose');
var config = require('./config');

if (process.ENV.MODE_ENV && process.ENV.MODE_ENV === 'localtest'){
	var DBconnectionurl = 'mongodb://'+config.mongooseConfig.mongooseHost+':'+config.mongooseConfig.mongoosePort+'/'+config.mongooseConfig.BroDB;
}else{
	var DBconnectionurl = 'mongodb://'+config.mongooseConfig.mongooseHost+':'+config.mongooseConfig.mongoosePort+'/'+config.mongooseConfig.BroDB;	
}

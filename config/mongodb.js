var mongoose = require('mongoose');
var config = require('./config');
var logger = require('./logger');

mongoose.set('debug', true);

mongoose.set('debug', function (coll, method, query, doc, options) {

		var date = new Date();
		var fileName = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() +'.log';
		
		var currentTime = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + '_' + date.getHours()+ ':' +date.getMinutes()+ ':'+date.getSeconds() ;
		var optionCotent = '';
		if (options) {
			optionCotent = JSON.stringify(options);
		}

		var content = currentTime + ' ' + coll + ' ' + method + ' ' + JSON.stringify(query) + ' '+ JSON.stringify(doc) + ' ' + optionCotent +'\n' 

		var logPath = path.resolve(__dirname +'/'+config.bro.mongooseConfig.mongooseLogFilePath) + fileName;

		
	 	fs.appendFile(logPath, content, function (err) {
			
			if (err && err.errno == -2){
			
					mkdirp(getDirName(logPath), function (err) {

						if (err) return err;

						fs.writeFile(logPath, content, function(err){
							
							if(err){
								console.log(err);
							}else{
								console.log('mkdirp ok');
							}
						});
					});
				

			}else if(!err){

			}
		});
	});

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV && process.env.NODE_ENV === 'localtest'){

	var DBconnectionurl = 'mongodb://'+config.bro.mongooseConfig.mongooseHost+':'+config.bro.mongooseConfig.mongoosePort+'/'+config.bro.mongooseConfig.mongooseDataBaseName;
}else{
	var DBconnectionurl = 'mongodb://'+config.bro.mongooseConfig.mongooseHost+':'+config.bro.mongooseConfig.mongoosePort+'/'+config.bro.mongooseConfig.mongooseDataBaseName;	
}


var Brojs = mongoose.connect(DBconnectionurl,function(err){
	if(err){
		logger.log('error','Mongoose Connection Error with' + DBconnectionurl);
	}else{
		logger.log('info','Mongoose Connection Succeed with' + DBconnectionurl);
	}

});

module.exports = Brojs;
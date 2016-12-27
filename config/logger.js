var winston = require('winston');
var config = require('./config');
var path = require('path');



var logger = new (winston.Logger)({

  transports: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: path.resolve( __dirname + '/' + config.bro.logConfig.logFilePath + '/' + 'all-log.log' ) , json: false })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: path.resolve( __dirname + '/' + config.bro.logConfig.logFilePath + '/' + 'exception-log.log' ), json: false })
  ],
  exitOnError: false
});


module.exports = logger;
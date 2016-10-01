if(process.env.NODE_ENV && process.env.NODE_ENV === 'localtest'){
	var env = 'localtest';
}else{
	var env = 'realbro';
}

module.exports = (require('./env/' + env +'.js'));
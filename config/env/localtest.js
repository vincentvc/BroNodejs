module.exports = {

	bro:{
		serverConfig:{
			serverHost:'localhost',
			serverPort: 3000
		},
		mongooseConfig:{
			mongooseHost:'localhost',
			mongoosePort:27017,
			mongooseDataBaseName:'BroDB',
			mongooseLogFilePath:'../log/mongoose/',
			mongooseUserName:'',
			mongooseUserPassword:''
		},
		ssoConfig:{

		},
		logConfig:{
			logFilePath:'../log/'
		}
	}
};
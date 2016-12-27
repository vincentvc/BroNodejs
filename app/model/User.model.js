var mongoose = require('mongoose');
Schema = mongoose.Schema;

var User = new Schema({
	name:{
		type: String
	},
	property:{[
         role:String,
         enabled:Boolean;
		]}

});

mongoose.model('User', User);
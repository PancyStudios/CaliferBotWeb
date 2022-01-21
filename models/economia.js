const mongo = require('mongoose')

module.exports = mongo.model(
	'money',
	new mongo.Schema({
		id: String,
		coins: Number
		})
);
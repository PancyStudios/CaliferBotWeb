const mongoose = require('mongoose');

module.exports = mongoose.model(
	'blacklist-Servers', 
	new mongoose.Schema({
		 Server: String,
	 })
 );
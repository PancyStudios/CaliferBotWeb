const mongoose = require('mongoose');

const ProteccionSchema = mongoose.Schema({
	guildID: {
		type: String,
		require: true
	}, 
	activo: {
		type: String,
		require: true
	}
})

const model = mongoose.model("AntiBots", ProteccionSchema)
console.log('Base de datos cargada: AntiBots')

module.exports = model;
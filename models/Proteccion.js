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

const model = mongoose.model("Proteccion", ProteccionSchema)

module.exports = model;
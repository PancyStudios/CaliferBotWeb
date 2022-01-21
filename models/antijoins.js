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

const model = mongoose.model("AntiJoins", ProteccionSchema)
console.log('Base de datos cargada: AntiJoins')

module.exports = model;
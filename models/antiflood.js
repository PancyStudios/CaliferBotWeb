const mongoose = require('mongoose');


const ProteccionSchema = mongoose.Schema({
	guildID: {
		type: String,
		require: true
	}, 
	activo: {
		type: String,
		require: true
	},
	tiempo1: {
		type: Number,
		require: true
	},
	limite1: {
		type: Number,
		require: true
	}
})

const model = mongoose.model("AntiFlood", ProteccionSchema)
console.log('Base de datos cargada: AntiFlood')

module.exports = model;
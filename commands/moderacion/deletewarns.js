const db = require('../../models/warns')

module.exports = {
    name : 'remove-warn',
	aliases: ['rmwarn','delwarn'],
	category: 'moderacion',
	usage: '<usuario> <numero de Advertencia>',
	description: 'Quita advertencias a un usuario',
	
    async run (client, message, args) { 
    }
}
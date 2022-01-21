const Discord = require('discord.js')
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist 
 
module.exports = {
	name: 'tweet',
    aliases: [''],
    category: 'diversion',
	description: 'manda un tweet',

	async run (client, message, args) {
		  
	}
}
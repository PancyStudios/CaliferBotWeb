
const Discord = require('discord.js');
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
module.exports = {
	name: 'nuke',
    aliases: [''],
    category: 'moderacion',
	description: 'Borra todo lo de un canal',

	async run (client, message, args) { 
			}
}
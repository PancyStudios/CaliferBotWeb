const {MessageAttachment} = require('discord.js')
const Discord = require('discord.js') 
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
 
module.exports = { 
	name: 'trump',
    aliases: [''],
    category: 'diversion',
	description: 'Envia un tweet como trump',
	run: async (client, message, args) => { 
	}}
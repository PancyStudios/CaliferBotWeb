const Discord = require('discord.js')
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
 
 
module.exports = {
  name: `impostor`,
  aliases: ['sus'],
  category: 'diversion',
  description: `eres el impostor?`,

 run: async (client, message, args) => { 
    }
  }
 
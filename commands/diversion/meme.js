const memes = require('discord-memes')
const Discord = require('discord.js')
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
 
module.exports = {
  name: `meme`,
  aliases: [''],
  category: 'diversion',
  description: `memesxd`,

  run: async (client, message, args) => {  
  }
}
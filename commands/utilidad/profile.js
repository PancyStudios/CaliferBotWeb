const Discord = require('discord.js')
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 

 
module.exports = {
  name: `profile`,
  aliases: ['userinfo', 'user'],
  category: 'utilidad',
  description: `mañaan`,

  run: async (client, message, args) => {
     
  }

}
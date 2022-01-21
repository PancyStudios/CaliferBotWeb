  const Discord = require('discord.js')
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
 
  module.exports = {
    name: `ppt`,
    aliases: [''],
    category: 'diversion',
    description: `juega piedra papel o tijeras`,

    async run (client, message, args){ 
  }
  }
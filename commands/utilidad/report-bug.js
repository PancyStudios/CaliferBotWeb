 const Discord = require('discord.js')
 
 const db = require('megadb'); //Definimos db
 let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
 
 module.exports = {
   name: `bug-report`,
   aliases: ['new-bug'],
   category: 'utilidad',
   description: `bug`,

   run: async (client, message, args) => { 
       }
 }
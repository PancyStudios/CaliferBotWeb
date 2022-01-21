
 const PrefixSchema = require('../../models/prefixes')
const db = require('megadb');  
let blacklist = new db.crearDB('blacklist');  
const Discord = require('discord.js')
 

 
module.exports = {
    name: "setprefix",
    aliases: [''],
    category: 'utilidad',
    description: "Establece el prefix",
    userPermissions: ['ADMINISTRATOR'],

    run: async (client, message, args) => { 
}
    }

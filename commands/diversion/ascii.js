  
const figlet = require('figlet');
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
module.exports = {
    name: "ascii",
    aliases: [''],
    category: 'diversion',
    description: "Converts text to ascii",

    run: async (client, message, args) => { 
    }
}
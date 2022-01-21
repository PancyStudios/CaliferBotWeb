 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
module.exports = {
    name: "clear",
    aliases: ["purge"],
    category: "moderacion",
    description: "Borrar mensajes",

    run: async (client, message, args) => { 

    }
}
const Discord = require('discord.js')
const client = new Discord.Client({ ws: { intents: 32767 }})
const mongodb = require('mongoose')
const server = require('./server')
const { Collection } = require('discord.js')

module.exports = client;
mongodb.connect(`${process.env.URLDB}`,{
    useUnifiedTopology : true,
    useNewUrlParser : true,
	useFindAndModify : true,
}).then(console.log('conectado a la base de datos externa')).catch(e => {
    console.log(`Error al conectar a la base de datos ${e}`)
})

client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();

console.log(process.env.TOKEN)

client.login(process.env.TOKEN)


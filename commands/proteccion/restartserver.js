const Discord = require('discord.js')
const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'restart-server',
    aliases: 'unnuke',
    description: 'Restaura el servidor con 2 canales basicos',
	botPermissions: ['MANAGE_CHANNELS'],
	userPermissions: ['ADMINISTRATOR'],
 /** 
  * @param {Client} client
  * @param {Message} message
  * @param {String[0]} args
  * */ 
 run: async(client, message, args) => { 
 }
}
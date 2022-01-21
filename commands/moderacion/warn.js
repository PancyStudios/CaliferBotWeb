const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warn',
	category: 'moderacion',
	aliases: ['addwarn'],
	usage: '<Usuario> (razon)',
	description: 'Advierte a alguien',
    /**
     * @param {Message} message
     */
    async run (client, message, args) { 
    }
}
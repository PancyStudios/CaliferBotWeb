const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    name :'warns',
	category: 'moderacion',
	aliases: ['infractions', 'warnings'],
	usage: '<usuario>',
	description: 'Ver los warns de una persona',
    /**
     * @param {Message} message
     */
    async run (client, message, args) { 
    }
}
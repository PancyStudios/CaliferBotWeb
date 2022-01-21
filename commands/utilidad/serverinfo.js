const { Client, Message, MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
	name: 'serverinfo',
	category: 'utilidad',
	description: 've la informacion de el servidor',
	botPermissions: ['EMBED_LINKS'],

	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message, args) => { 
	}
}
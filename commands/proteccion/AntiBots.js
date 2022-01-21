const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const schema = require('../../models/antibots');

module.exports = {
	name: 'antibots',
	category: 'proteccion',
	description: 'Evita que se unan bots',
	botPermissions: ['KICK_MEMBERS'],
	userPermissions: ['ADMINISTRATOR'],

	run: async(client, message, args) => { 
	}
}
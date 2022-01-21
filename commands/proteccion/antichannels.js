const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const schema = require('../../models/antichannels');

module.exports = {
	name: 'antichannels',
	category: 'proteccion',
	description: 'Evita que se hagan canales',
	botPermissions: ['MANAGE_CHANNELS'],
	userPermissions: ['ADMINISTRATOR'],

	run: async(client, message, args) => { 
	}
}
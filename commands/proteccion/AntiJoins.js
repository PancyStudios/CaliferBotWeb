const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const schema = require('../../models/antijoins');

module.exports = {
	name: 'antijoins',
	category: 'proteccion',
	description: 'Evita que se unan miembros',
	botPermissions: ['KICK_MEMBERS'],
	userPermissions: ['ADMINISTRATOR'],

	run: async(client, message, args) => { 
	}
}
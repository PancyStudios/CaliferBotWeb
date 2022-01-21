const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const schema = require('../../models/antiraid');

module.exports = {
	name: 'antiraid',
	category: 'proteccion',
	description: 'Intenta evitar raids',
	usage: '{enable | disable} {userType} {limite} {tiempo}',
	botPermissions: ['ADMINISTRATOR'],
	userPermissions: ['ADMINISTRATOR'],

	run: async(client, message, args) => { 

	}
}

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const schema = require('../../models/antiflood');

module.exports = {
	name: 'antiflood',
	category: 'proteccion',
	description: 'Evita que se manden mensajes masivos',
	usage: '{enable | disable} {limite} {tiempo}',
	botPermissions: ['KICK_MEMBERS'],
	userPermissions: ['ADMINISTRATOR'],
	GuildPremium: true,

	run: async(client, message, args) => { 
	}
}
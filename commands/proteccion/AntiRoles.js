const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const schema = require('../../models/antiroles');

module.exports = {
	name: 'antiroles',
	category: 'proteccion',
	description: 'Evita que se hagan roles',
	botPermissions: ['MANAGE_ROLES'],
	userPermissions: ['ADMINISTRATOR'],

	run: async(client, message, args) => { 
	}
}
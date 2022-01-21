const Discord = require('discord.js');
const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'role-add',
    usage: '{ UserMention } { RoleName }',
    botPermissions: ['MANAGE_ROLES'],
    userPermissions: ['MANAGE_ROLES'],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */

    run: async(client, message, args) => {
 
    }
}
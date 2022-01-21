const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');
const LogsSchema = require('../../models/logs')

module.exports = {
    name: 'setlogs',
    category: 'utilidad', 
    usage: '(ChannelMention)',
    userPermissions: ['MANAGE_GUILD'],
    botPermissions: ['VIEW_AUDIT_LOGS'],
    
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */

    run: async(client, message, args) => { 
    }
}
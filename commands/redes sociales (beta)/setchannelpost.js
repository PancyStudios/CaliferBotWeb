const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');
const SchemaPost = require('../../models/Redes_sociales_bot');

module.exports = {
    name: 'setPostChannel',
    usage: '{ ChannelMention }',
    category: 'Red Social Bot',
    aliases: ['setpostchannel', 'postchannel', 'setchannelpost'],
    userPermissions: ['MANAGE_GUILD'],
    botPermissions: ['EMBED_LINKS'],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[0]} args
     */

    run: async(client, message, args) => { 
    }
}
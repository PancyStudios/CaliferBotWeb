const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');
const SchemaPost = require('../../models/redes_sociales_user');

module.exports = {
    name: 'setPostColor',
    category: 'Red Social Bot',
    aliases: ['setpostcolor', 'setcolorpost', 'setColorpost'],
    usage: '{ color }',
    botPermissions: ['EMBED_LINKS'],

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[0]} args
     */

    run: async(client, message, args) => {
    }
}

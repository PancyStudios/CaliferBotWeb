const { Client, Message } = require('discord.js');
const premium = require('../../models/premium');
const day = require('dayjs')

module.exports = {
    name: 'add-premium',
    description: 'Agrega un usuario premium',
    aliases: ['premium'],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */

    run: async(client, message, args) => { 
    }
}
const { Client, Message, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const NekoClient = new Neko()

module.exports = {
    name: 'sad',
    category: 'reaccion',

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */

    run: async(client, message, args) => {
        
        if(message.author.id !== '711329342193664012') return message.reply({ content: 'Comando en desarrollo'})

        return message.reply({ content: 'Te falta hacer el codigo del comando :wena:'})
        

        const SadEmbed = new MessageEmbed()
        .setTitle(`${message.author.username} esta triste.`)
        .setImage()
        .setTimestamp()
        
        message.reply({ embeds: [SadEmbed] })
    }
}
const { Client, Message, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const NekoClient = new Neko;
module.exports = {
    name: 'kill',
    category: 'reaccion',
    usage: '{Mention}',
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */
    run: async(client, message, args) => {
        
        if(message.author.id !== '711329342193664012') return message.reply({ content: 'Comando en desarrollo'})

        return message.reply({ content: 'Te falta hacer el codigo del comando :wena:'})
        


        const userk = message.mentions.members.first();
        if(!userk) return message.reply('No mencionaste a nadie');

        
        const KillEmbed = new MessageEmbed()
        .setTitle(`${message.author.discriminator} mato a ${userk.displayName}`)
        .setImage()
    }
}
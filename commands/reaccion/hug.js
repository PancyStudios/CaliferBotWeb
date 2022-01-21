const { Client, Message, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const NekoClient = new Neko;
module.exports = {
    name: 'hug',
    category: 'reaccion',
    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[0]} args
     */
    run: async(client, message, args) => {
        const user = message.mentions.members.first()
        if(!user) return message.reply({ content: 'No mencionaste a alguien'})

        const image = await NekoClient.sfw.hug();

        const HugEmbed = new MessageEmbed()
        .setTitle(`${message.author.username} le dio un abrazo a ${user.displayName}`)
        .setImage(image.url)
        .setTimestamp()
        .setColor('RANDOM')

        message.reply({ embeds: [HugEmbed]})
    }   
}
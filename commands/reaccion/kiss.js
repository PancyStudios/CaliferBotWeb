const { Client, Message, MessageEmbed } = require('discord.js');
const Neko = require('nekos.life')
const NekoClient = new Neko()

module.exports = {
    name: 'kiss',
    category: 'reaccion',

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */

    run: async (client, message, args) => {
        try {
        if(message.author.id !== '711329342193664012') return message.reply({ content: 'Comando en desarrollo'})

        const user = message.mentions.users.first();
        if(!user) return message.reply({ content: 'Menciona a alguien' })

        const imagen = await NekoClient.sfw.kiss();

        const KissEmbed = new MessageEmbed()
        .setTitle(`${message.author.id} le dio un beso a ${user.username}`)
        .setImage(imagen.url)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
        .setTimestamp()

        message.reply({ embeds: [KissEmbed]})

        } catch (err) {
            message.reply({ content: err})
        }
    }
}
const { Client, Message } = require('discord.js')

module.exports = {
    name: 'nervous',

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {Stirng[0]} args 
     */

    run: async(client, message, args) => {
        
        if(message.author.id !== '711329342193664012') return message.reply({ content: 'Comando en desarrollo'})

        message.reply({ contemt: 'Te falta hacer el codigo del comando :wena:'})
        

    }
}
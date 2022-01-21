const {
  Client,
  Message,
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");
const { readdirSync } = require("fs");
const PrefixSchema = require('../../models/prefixes')

module.exports = {
  name: "cmd",
  aliases: ['cmds', 'comandos'],
  category: "utilidad",
  description: "Sirve para ver informacion detallada de los comandos",

  /**
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[0]} args 
   */

  run: async (client, message, args) => { 
  }
}
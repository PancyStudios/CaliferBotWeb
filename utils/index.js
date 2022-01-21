const { readdirSync } = require('fs');
const client = require('../index')
const { Client } = require('./index')

function getCommands () {
	/**
	 * @param {Client} client
	 */
	let categories = [];


	readdirSync("./commands/").forEach((dir) => {
		const directories = readdirSync(`./commands/${dir}`).filter((file) => file.endsWith('.js'))


		const value = [];
		const commands = directories.map((command) => {
			const file = require(`../commands/${dir}/${command}`)

			value.push({
				name: file.name ? file.name : 'No hay nombre del comando',
				description: file.description ? file.description : 'No hay description del comando',
				aliases: file.aliases ? file.aliases : 'No hay alias',
				usage: file.usage ? file.usage : 'No hay instrucciones de uso'
			})


		});
		let data = new Object();

		data = {
			name: dir.toUpperCase(),
			value,
		}
		
		categories.push(data);
	});
	return categories;	
}

function getBotInfo () {
	/**
	 * @param {Client} client
	 */
	const value = []
	let sus = []
    {

	
	value.push({
		channels: client.channels.cache.size,
		users:	client.users.cache.size,
		guilds: client.guilds.cache.size
	})
	
	let data = new Object();
	data = {
		value
	}

	sus.push(data)

	}

	return sus;

				

}

module.exports = { getCommands, getBotInfo }
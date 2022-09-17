require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const emojiCharacters = require('./utilities/emojiCharacters.js');

const bot_token = process.env.TOKEN;

const bot = new Client( {intents: [GatewayIntentBits.Guilds] });

// Set Bot details
bot.user.setUsername('SAVAGE');
bot.user.setAvatar('./images/savage-bot.jpeg');

// Set Discord presence
bot.user.setActivity("My Master's Commands", { type: ActivityType.Listening});
bot.user.setStatus('online');

// build collection of Commands
bot.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath,file);
    const command = require(filePath);
    bot.commands.set(command.data.name, command);
}

// register all Events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args));
	} else {
		bot.on(event.name, (...args) => event.execute(...args));
	}
}

bot.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = bot.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch(error) {
        console.log(error);
        await interaction.reply({ content: 'Error while executing command.', ephemeral: true});
    }
});

bot.login(bot_token);

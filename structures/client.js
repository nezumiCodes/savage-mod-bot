const Discord = require('discord.js');
const config = require('../config.js');
const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');

class Client extends Discord.Client {
    constructor() {
        super({
            intents: [
                Discord.Intents.FLAGS.GUILDS,
				Discord.Intents.FLAGS.GUILD_MESSAGES,
				Discord.Intents.FLAGS.GUILD_VOICE_STATES,
            ]
        });
        this.requiredVoicePermissions = [
			'VIEW_CHANNEL',
			'CONNECT',
			'SPEAK',
		];
		this.requiredTextPermissions = [
			'VIEW_CHANNEL',
			'SEND_MESSAGES',
			'READ_MESSAGE_HISTORY',
			'ADD_REACTIONS',
			'EMBED_LINKS',
		];
    }
}
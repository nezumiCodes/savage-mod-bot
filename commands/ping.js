const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check bot latency'),
	async execute(interaction) {
		await interaction.reply({content: 'Pinging...', fetchReply: true});
		interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`)
	},
};
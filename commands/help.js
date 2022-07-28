const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get information on the commands for this bot'),
	async execute(interaction) {
		let response = '```\n';
    response += '/class-info: Get information on a character of a certain class and level\n';
    response += '/equip: Provides a basic equipment list for a new character of a given class\n';
    response += '/generate: Generate a character from scratch!\n';
    response += '/roll: Roll some dice!\n';
    response += '/scores: Rolls 3d6 six times, generating a character\'s ability scores\n';
    response += '/spell: Provides a random spell of a given class and spell level\n';
    response += '/srd: Sends you a link to the Old-School Essentials SRD\n';
    response += '/starting-gold: Set your character\'s starting gold\n';
    response += '```';
		await interaction.reply({ content: response, ephemeral: true });
	},
};
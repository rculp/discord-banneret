const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('srd')
		.setDescription('Sends you a link to the Old-School Essentials SRD'),
	async execute(interaction) {
		const response = 'https://oldschoolessentials.necroticgnome.com/srd/index.php/Main_Page';
		await interaction.reply({ content: response, ephemeral: true });
	},
};
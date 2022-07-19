const { SlashCommandBuilder } = require('@discordjs/builders');
const Dice = require('../utils/dice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll some dice!')
		.addStringOption(option =>
			option.setName('dice')
				.setDescription('The dice you\'d like to roll, with any modifiers'),
		),
	async execute(interaction) {
		const input = interaction.options.getString('dice');
		const roll = Dice.roller.roll(input);
		await interaction.reply(`${roll}`);
	},
};
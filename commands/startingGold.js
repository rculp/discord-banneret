const { SlashCommandBuilder } = require('@discordjs/builders');
const Dice = require('../utils/dice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('starting-gold')
		.setDescription('Set your character\'s starting gold'),
	async execute(interaction) {
		const roll = Dice.roller.roll('3d6');
    const gold = roll.total * 10;
		await interaction.reply(`**Gold:** ${gold}`);
	},
};
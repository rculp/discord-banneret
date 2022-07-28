const { SlashCommandBuilder } = require('@discordjs/builders');
const { Formatters } = require('discord.js');
const { ABILITIES, getModifier } = require('../utils/ability-scores');
const Dice = require('../utils/dice');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scores')
		.setDescription('Rolls 3d6 six times, generating a character\'s ability scores'),
	async execute(interaction) {
		const abilities = Object.values(ABILITIES);
		let response = '';
		abilities.forEach(ability => {
			const roll = Dice.roller.roll('3d6');
			response += Formatters.bold(`${ability}: `);
			response += roll.total;
			response += ` [${getModifier(roll.total)}]`;
			response += '\n';
		});
		await interaction.reply(response);
	},
};
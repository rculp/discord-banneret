const { SlashCommandBuilder } = require('@discordjs/builders');

const Bard = require('../classes/bard');
const Cleric = require('../classes/cleric');
const Dwarf = require('../classes/dwarf');
const Elf = require('../classes/elf');
const Fighter = require('../classes/fighter');
const MagicUser = require('../classes/magic-user');
const Thief = require('../classes/thief');
const Halfling = require('../classes/halfling');
const Druid = require('../classes/druid');
const Illusionist = require('../classes/illusionist');
const Gnome = require('../classes/gnome');
const Paladin = require('../classes/paladin');
const Ranger = require('../classes/ranger');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('class-info')
		.setDescription('Get information on a character of a certain class and level')
		.addStringOption(option =>
			option.setName('class')
				.setDescription('The class of the character')
				.setRequired(true)
				.addChoices(
					{ name: 'Cleric', value: 'cleric' },
					{ name: 'Fighter', value: 'fighter' },
					{ name: 'Magic-User', value: 'magicUser' },
					{ name: 'Thief', value: 'thief' },
					{ name: 'Dwarf', value: 'dwarf' },
					{ name: 'Elf', value: 'elf' },
					{ name: 'Halfling', value: 'halfling' },
          { name: 'Bard', value: 'bard' },
					{ name: 'Druid', value: 'druid' },
					{ name: 'Illusionist', value: 'illusionist' },
					{ name: 'Paladin', value: 'paladin' },
          { name: 'Ranger', value: 'ranger' },
          { name: 'Gnome', value: 'gnome' },
				),
		)
		.addNumberOption(option =>
			option.setName('level')
				.setDescription('The level of the character')
				.setRequired(true),
		),
	async execute(interaction) {
		const charClass = interaction.options.getString('class');
		const charLevel = interaction.options.getNumber('level');
		let classInfo;
		switch (charClass) {
			case 'cleric':
				classInfo = new Cleric();
				break;
			case 'fighter':
				classInfo = new Fighter();
				break;
			case 'magicUser':
				classInfo = new MagicUser();
				break;
			case 'thief':
				classInfo = new Thief();
				break;
			case 'dwarf':
				classInfo = new Dwarf();
				break;
			case 'elf':
				classInfo = new Elf();
				break;
			case 'halfling':
				classInfo = new Halfling();
				break;
			case 'bard':
				classInfo = new Bard();
				break;
			case 'druid':
				classInfo = new Druid();
				break;
			case 'illusionist':
				classInfo = new Illusionist();
				break;
			case 'paladin':
				classInfo = new Paladin();
				break;
			case 'ranger':
				classInfo = new Ranger();
				break;
			case 'gnome':
				classInfo = new Gnome();
				break;
			default:
		}
		const response = classInfo.getSummary(charLevel);
		await interaction.reply({ content: response, ephemeral: true });
	},
};
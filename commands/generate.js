const { SlashCommandBuilder } = require('@discordjs/builders');
const { Formatters, MessageActionRow, MessageButton } = require('discord.js');
const { ABILITIES, getModifier } = require('../utils/ability-scores');
const Dice = require('../utils/dice');
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
		.setName('generate')
		.setDescription('Generate a character from scratch!'),
	async execute(interaction) {

		const abilities = Object.values(ABILITIES);
		const scores = {};
		let response = '';
		abilities.forEach(ability => {
			const roll = Dice.roller.roll('3d6');
			scores[ability] = { score: roll.total, modifier: getModifier(roll.total) };
			response += Formatters.bold(`${ability}: `);
			response += roll.total;
			response += ` [${getModifier(roll.total)}]`;
			response += '\n';
		});
		const classes = [];
		classes.push(new Cleric());
		classes.push(new Fighter());
		classes.push(new MagicUser());
		classes.push(new Thief());
		classes.push(new Dwarf());
		classes.push(new Elf());
		classes.push(new Halfling());
		classes.push(new Bard());
		classes.push(new Druid());
		classes.push(new Illusionist());
		classes.push(new Paladin());
		classes.push(new Ranger());
		classes.push(new Gnome());

		const eligibleClasses = [];
		classes.forEach(charClass => {
			const reqs = charClass.requirements;
			if (reqs.length === 0) {
				eligibleClasses.push(charClass.className);
			} else if (reqs.every(req => scores[req.ability].score >= req.value)) {
				eligibleClasses.push(charClass.className);
			} else {
				return;
			}
		});

		const components = [];

		if (eligibleClasses.length > 0) {
			let row = new MessageActionRow();
			eligibleClasses.forEach(charClass => {
				row.addComponents(
					new MessageButton()
						.setCustomId(charClass)
						.setLabel(charClass)
						.setStyle('PRIMARY'),
				);
				if (row.components.length > 4) {
					components.push({ ...row });
					row = new MessageActionRow();
				}
			});
			if (row.components.length > 0) {
				components.push({ ...row });
			}
		}

		await interaction.reply({ content: response, ephemeral: true, components: components });

    const filter = i => i.user.id === interaction.user.id && i.message.interaction.id === interaction.id && eligibleClasses.includes(i.customId);
    const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });
    collector.on('collect', async i => {
      try {
        await i.update({ content: `Class selected: ${i.customId}`, ephemeral: true, components: [] });
				let newResponse = `***${interaction.user.username}'s new character:***\n`;
				newResponse += response;
				const selectedClass = classes.find(x => x.className === i.customId);
				const conModifier = parseInt(scores[ABILITIES.Constitution].modifier);
				const intScore = scores[ABILITIES.Intelligence].score;
				const wisScore = scores[ABILITIES.Wisdom].score;
				if (selectedClass.classAbilities.find(classAbility => classAbility.name === 'Divine Magic')) {
					newResponse += selectedClass.getSummary(1, conModifier, intScore, wisScore);
				} else {
					newResponse += selectedClass.getSummary(1, conModifier, intScore);
				}
				const gear = selectedClass.getEquipment();
				newResponse += `**Gold:** ${gear.gold}\n`;
				newResponse += '**Weapons:**\n';
				gear.weapons.forEach(weapon => {
					newResponse += ' - ';
					newResponse += weapon.name;
					if (weapon.quantity && weapon.quantity > 1) {
						newResponse += ` x${weapon.quantity}`;
					}
					newResponse += '\n';
				});
				if (gear.armour && gear.armour.length > 0) {
					newResponse += '**Armour:**\n';
					gear.armour.forEach(armour => {
						newResponse += ' - ';
						newResponse += armour.name;
						newResponse += '\n';
					});
				}
				newResponse += '**Adventuring Gear:**\n';
				gear.equipment.forEach(equipment => {
					newResponse += ' - ';
					newResponse += equipment.name;
					if (equipment.quantity && equipment.quantity > 1) {
						newResponse += ` x${equipment.quantity}`;
					}
					newResponse += '\n';
				});
        await i.followUp({ content: newResponse });
      } catch (error) {
        console.log(error);
      }
    });
    collector.on('end', collected => console.log(`Collected ${collected.size} items`));

	},
};
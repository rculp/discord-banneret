const { SlashCommandBuilder } = require('@discordjs/builders');
const Equipment = require('../utils/equipment');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('equip')
		.setDescription('Provides a basic equipment list for a new character of a given class')
		.addStringOption(option =>
			option.setName('class')
				.setDescription('The class of the character being equipped')
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
				)),
	async execute(interaction) {
		const charClass = interaction.options.getString('class');
		const gear = Equipment.new();

		switch (charClass) {
      case 'cleric':
        Equipment.equipCleric(gear);
        break;
      case 'fighter':
        Equipment.equipFighter(gear);
        break;
      case 'magicUser':
        Equipment.equipMagicUser(gear);
        break;
      case 'thief':
        Equipment.equipThief(gear);
        break;
      case 'dwarf':
        Equipment.equipDwarf(gear);
        break;
      case 'elf':
        Equipment.equipElf(gear);
        break;
      case 'halfling':
        Equipment.equipHalfling(gear);
        break;
      case 'bard':
        Equipment.equipBard(gear);
        break;
      case 'druid':
        Equipment.equipDruid(gear);
        break;
      case 'illusionist':
        Equipment.equipIllusionist(gear);
        break;
      case 'paladin':
        Equipment.equipPaladin(gear);
        break;
      case 'ranger':
        Equipment.equipRanger(gear);
        break;
      case 'gnome':
        Equipment.equipGnome(gear);
        break;
      default:
        Equipment.addAdventuringGear(gear, 2);
		}
    let message = `**Gold:** ${gear.gold}\n`;
    message += '**Weapons:**\n';
    gear.weapons.forEach(weapon => {
      message += ' - ';
      message += weapon.name;
      if (weapon.quantity && weapon.quantity > 1) {
        message += ` x${weapon.quantity}`;
      }
      message += '\n';
    });
    if (gear.armour && gear.armour.length > 0) {
      message += '**Armour:**\n';
      gear.armour.forEach(armour => {
        message += ' - ';
        message += armour.name;
        message += '\n';
      });
    }
    message += '**Adventuring Gear:**\n';
    gear.equipment.forEach(equipment => {
      message += ' - ';
      message += equipment.name;
      if (equipment.quantity && equipment.quantity > 1) {
        message += ` x${equipment.quantity}`;
      }
      message += '\n';
    });
		await interaction.reply(message);
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');
const Spells = require('../utils/spells');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spell')
		.setDescription('Provides a random spell of a given class and spell level')
		.addStringOption(option =>
			option.setName('class')
				.setDescription('The spellcaster class')
				.setRequired(true)
				.addChoices(
					{ name: 'Cleric', value: 'cleric' },
					{ name: 'Druid', value: 'druid' },
          { name: 'Illusionist', value: 'illusionist' },
					{ name: 'Magic-User', value: 'magicUser' },
				))
    .addNumberOption(option =>
      option.setName('level')
        .setDescription('The spell level')
        .setRequired(true)),
	async execute(interaction) {
		const charClass = interaction.options.getString('class');
    const level = interaction.options.getNumber('level');
    let spell;
		switch (charClass) {
      case 'cleric':
        spell = Spells.getClericSpell(level);
        break;
      case 'druid':
        spell = Spells.getDruidSpell(level);
        break;
      case 'illusionist':
        spell = Spells.getIllusionistSpell(level);
        break;
      case 'magicUser':
        spell = Spells.getMagicUserSpell(level);
        break;
      default:
		}
    let message;
    if (!spell || spell.length === 0) {
      message = 'No spell of this level exists for your class!';
      await interaction.reply({ content: message, ephemeral: true });
    } else {
      message = `**${spell[0].level} Level Spell:** ${spell[0].name}`;
      if (spell[0].reversed) {
        message += ` *(${spell[0].reversed})*`;
      }
      await interaction.reply(message);
    }
	},
};
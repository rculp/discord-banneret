module.exports = {
	ABILITIES: {
		Strength: 'STR',
		Intelligence: 'INT',
		Wisdom: 'WIS',
		Dexterity: 'DEX',
		Constitution: 'CON',
		Charisma: 'CHA',
	},
	getModifier: (ability) => {
		if (ability <= 3) {
			return '-3';
		} else if (ability <= 5) {
			return '-2';
		} else if (ability <= 8) {
			return '-1';
		} else if (ability > 12 && ability <= 15) {
			return '+1';
		} else if (ability > 15 && ability <= 17) {
			return '+2';
		} else if (ability > 17) {
			return '+3';
		} else {
			return '0';
		}
	},
};
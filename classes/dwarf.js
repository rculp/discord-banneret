const { ABILITIES } = require('../utils/ability-scores');
const Dice = require('../utils/dice');
const CharacterClass = require('./character-class');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');


class Dwarf extends CharacterClass {
  constructor() {
    super(
      [{ ability: ABILITIES.Constitution, value: 9 }],
      [ABILITIES.Strength],
      'd8',
      12,
      ['Common', 'Dwarvish', 'Gnomish', 'Goblin', 'Kobold'],
      [
        { level: 1, bonus: '0' },
        { level: 2, bonus: '0' },
        { level: 3, bonus: '0' },
        { level: 4, bonus: '+2' },
        { level: 5, bonus: '+2' },
        { level: 6, bonus: '+2' },
        { level: 7, bonus: '+5' },
        { level: 8, bonus: '+5' },
        { level: 9, bonus: '+5' },
        { level: 10, bonus: '+7' },
        { level: 11, bonus: '+7' },
        { level: 12, bonus: '+7' },
      ],
      {
        1: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        2: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        3: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        4: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        5: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        6: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        7: [
          { name: 'Death / poison', value: 4 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 6 },
          { name: 'Breath attacks', value: 7 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
        8: [
          { name: 'Death / poison', value: 4 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 6 },
          { name: 'Breath attacks', value: 7 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
        9: [
          { name: 'Death / poison', value: 4 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 6 },
          { name: 'Breath attacks', value: 7 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
        10: [
          { name: 'Death / poison', value: 2 },
          { name: 'Wands', value: 3 },
          { name: 'Paralysis / petrify', value: 4 },
          { name: 'Breath attacks', value: 4 },
          { name: 'Spells / rods / staves', value: 6 },
        ],
        11: [
          { name: 'Death / poison', value: 2 },
          { name: 'Wands', value: 3 },
          { name: 'Paralysis / petrify', value: 4 },
          { name: 'Breath attacks', value: 4 },
          { name: 'Spells / rods / staves', value: 6 },
        ],
        12: [
          { name: 'Death / poison', value: 2 },
          { name: 'Wands', value: 3 },
          { name: 'Paralysis / petrify', value: 4 },
          { name: 'Breath attacks', value: 4 },
          { name: 'Spells / rods / staves', value: 6 },
        ],
      },
      [
        { name: 'Detect Construction Tricks', minLevel: 1 },
        { name: 'Detect Room Traps', minLevel: 1 },
        { name: 'Infravision', minLevel: 1 },
        { name: 'Listening at Doors', minLevel: 1 },
        { name: 'Shield Bash', minLevel: 1 },
        { name: 'Stronghold', minLevel: 9 },
      ],
    );
    this.className = 'Dwarf';
  }

  getHitPoints(level, modifier = '0') {
    let hitPoints = 0;
    if (level > 9) {
      const roll = Dice.roller.roll(`9${this.hitDice}+${(level - 9) * 3}`);
      hitPoints = roll.total;
    } else {
      hitPoints = this.rollHitPoints(this.hitDice, level, modifier);
    }
    return hitPoints;
  }

  getSummary(level, modifier = 0, intScore = 10) {
    let summaryString = `**Class:** ${this.className}\n`;
    summaryString += `**HP:** ${this.getHitPoints(level, modifier)}\n`;
    const attackBonus = this.attackBonus.find(x => x.level === level).bonus;
    summaryString += `**Attack Bonus:** ${attackBonus}\n`;
    summaryString += '**Saving Throws:**\n';
    const saves = this.savingThrows[level];
    saves.forEach(savingThrow => {
      summaryString += ` - ${savingThrow.name}: ${savingThrow.value}\n`;
    });
    summaryString += '**Class Abilities:**\n';
    this.classAbilities.forEach(ability => {
      if (ability.minLevel <= level) {
        summaryString += ` - ${ability.name}\n`;
      }
    });
    summaryString += '**Languages:** ';
    const languages = this.languages;
    if (intScore >= 18) {
      getNewLanguage(languages, 3);
    } else if (intScore >= 15) {
      getNewLanguage(languages, 2);
    } else if (intScore >= 13) {
      getNewLanguage(languages);
    }
    summaryString += languages.join(', ');
    summaryString += '\n';
    return summaryString;
  }

  getEquipment() {
    const gear = Equipment.new();
    Equipment.equipDwarf(gear);
    return gear;
  }
}

module.exports = Dwarf;
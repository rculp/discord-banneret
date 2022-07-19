const { ABILITIES } = require('../utils/ability-scores');
const Dice = require('../utils/dice');
const CharacterClass = require('./character-class');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');


class Thief extends CharacterClass {
  constructor() {
    super(
      [],
      [ABILITIES.Dexterity],
      'd4',
      14,
      ['Common'],
      [
        { level: 1, bonus: '0' },
        { level: 2, bonus: '0' },
        { level: 3, bonus: '0' },
        { level: 4, bonus: '0' },
        { level: 5, bonus: '+2' },
        { level: 6, bonus: '+2' },
        { level: 7, bonus: '+2' },
        { level: 8, bonus: '+2' },
        { level: 9, bonus: '+5' },
        { level: 10, bonus: '+5' },
        { level: 11, bonus: '+5' },
        { level: 12, bonus: '+5' },
        { level: 13, bonus: '+7' },
        { level: 14, bonus: '+7' },
      ],
      {
        1: [
          { name: 'Death / poison', value: 13 },
          { name: 'Wands', value: 14 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        2: [
          { name: 'Death / poison', value: 13 },
          { name: 'Wands', value: 14 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        3: [
          { name: 'Death / poison', value: 13 },
          { name: 'Wands', value: 14 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        4: [
          { name: 'Death / poison', value: 13 },
          { name: 'Wands', value: 14 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        5: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 13 },
        ],
        6: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 13 },
        ],
        7: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 13 },
        ],
        8: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 13 },
        ],
        9: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 12 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        10: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 12 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        11: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 12 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        12: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 12 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        13: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 7 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
        14: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 7 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
      },
      [
        { name: 'Back-stab', minLevel: 1 },
        { name: 'Improved Critical Hit', minLevel: 5 },
        { name: 'Thief Skills', minLevel: 1 },
        { name: 'Expertise', minLevel: 1 },
        { name: 'Scroll Use', minLevel: 10 },
        { name: 'Thief Den', minLevel: 9 },
      ],
    );
    this.className = 'Thief';
  }

  getHitPoints(level, modifier = '0') {
    let hitPoints = 0;
    if (level > 9) {
      const roll = Dice.roller.roll(`9${this.hitDice}+${(level - 9) * 2}`);
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
    Equipment.equipThief(gear);
    return gear;
  }
}

module.exports = Thief;
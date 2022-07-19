const { ABILITIES } = require('../utils/ability-scores');
const Dice = require('../utils/dice');
const CharacterClass = require('./character-class');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');

class Fighter extends CharacterClass {
  constructor() {
    super(
      [],
      [ABILITIES.Strength],
      'd8',
      14,
      ['Common'],
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
        { level: 13, bonus: '+9' },
        { level: 14, bonus: '+9' },
      ],
      {
        1: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 15 },
          { name: 'Spells / rods / staves', value: 16 },
        ],
        2: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 15 },
          { name: 'Spells / rods / staves', value: 16 },
        ],
        3: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 15 },
          { name: 'Spells / rods / staves', value: 16 },
        ],
        4: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 14 },
        ],
        5: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 14 },
        ],
        6: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 14 },
        ],
        7: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        8: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        9: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        10: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 8 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        11: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 8 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        12: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 8 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        13: [
          { name: 'Death / poison', value: 4 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 6 },
          { name: 'Breath attacks', value: 5 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
        14: [
          { name: 'Death / poison', value: 4 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 6 },
          { name: 'Breath attacks', value: 5 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
      },
      [
        { name: 'Mighty Deeds', minLevel: 1 },
        { name: 'Stronghold', minLevel: 1 },
        { name: 'Title', minLevel: 9 },
      ],
    );
    this.className = 'Fighter';
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
    Equipment.equipFighter(gear);
    return gear;
  }
}

module.exports = Fighter;
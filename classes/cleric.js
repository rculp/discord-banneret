const { ABILITIES } = require('../utils/ability-scores');
const CharacterClass = require('./character-class');
const Dice = require('../utils/dice');
const Spells = require('../utils/spells');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');

class Cleric extends CharacterClass {
  constructor() {
    super(
      [],
      [ABILITIES.Wisdom],
      'd6',
      14,
      ['Alignment', 'Common'],
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
          { name: 'Death / poison', value: 11 },
          { name: 'Wands', value: 12 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        2: [
          { name: 'Death / poison', value: 11 },
          { name: 'Wands', value: 12 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        3: [
          { name: 'Death / poison', value: 11 },
          { name: 'Wands', value: 12 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        4: [
          { name: 'Death / poison', value: 11 },
          { name: 'Wands', value: 12 },
          { name: 'Paralysis / petrify', value: 14 },
          { name: 'Breath attacks', value: 16 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        5: [
          { name: 'Death / poison', value: 9 },
          { name: 'Wands', value: 10 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        6: [
          { name: 'Death / poison', value: 9 },
          { name: 'Wands', value: 10 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        7: [
          { name: 'Death / poison', value: 9 },
          { name: 'Wands', value: 10 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        8: [
          { name: 'Death / poison', value: 9 },
          { name: 'Wands', value: 10 },
          { name: 'Paralysis / petrify', value: 12 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        9: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
        10: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
        11: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
        12: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
        13: [
          { name: 'Death / poison', value: 3 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 7 },
          { name: 'Breath attacks', value: 8 },
          { name: 'Spells / rods / staves', value: 7 },
        ],
        14: [
          { name: 'Death / poison', value: 3 },
          { name: 'Wands', value: 5 },
          { name: 'Paralysis / petrify', value: 7 },
          { name: 'Breath attacks', value: 8 },
          { name: 'Spells / rods / staves', value: 7 },
        ],
      },
      [
        { name: 'Divine Magic', minLevel: 1 },
        { name: 'Turn Undead', minLevel: 1 },
        { name: 'Stronghold', minLevel: 9 },
      ],
    );
    this.className = 'Cleric';
    this.spellsKnown = {
      1: [],
      2: [
        { spellLevel: 1, known: 1 },
      ],
      3: [
        { spellLevel: 1, known: 2 },
      ],
      4: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 1 },
      ],
      5: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
      ],
      6: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 1 },
        { spellLevel: 4, known: 1 },
      ],
      7: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 2 },
        { spellLevel: 4, known: 1 },
        { spellLevel: 5, known: 1 },

      ],
      8: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 3 },
        { spellLevel: 3, known: 2 },
        { spellLevel: 4, known: 2 },
        { spellLevel: 5, known: 1 },

      ],
      9: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 3 },
        { spellLevel: 3, known: 3 },
        { spellLevel: 4, known: 2 },
        { spellLevel: 5, known: 2 },
      ],
      10: [
        { spellLevel: 1, known: 4 },
        { spellLevel: 2, known: 4 },
        { spellLevel: 3, known: 3 },
        { spellLevel: 4, known: 3 },
        { spellLevel: 5, known: 2 },
      ],
      11: [
        { spellLevel: 1, known: 4 },
        { spellLevel: 2, known: 4 },
        { spellLevel: 3, known: 4 },
        { spellLevel: 4, known: 3 },
        { spellLevel: 5, known: 3 },
      ],
      12: [
        { spellLevel: 1, known: 5 },
        { spellLevel: 2, known: 5 },
        { spellLevel: 3, known: 4 },
        { spellLevel: 4, known: 4 },
        { spellLevel: 5, known: 3 },
      ],
      13: [
        { spellLevel: 1, known: 5 },
        { spellLevel: 2, known: 5 },
        { spellLevel: 3, known: 5 },
        { spellLevel: 4, known: 4 },
        { spellLevel: 5, known: 4 },
      ],
      14: [
        { spellLevel: 1, known: 6 },
        { spellLevel: 2, known: 5 },
        { spellLevel: 3, known: 5 },
        { spellLevel: 4, known: 5 },
        { spellLevel: 5, known: 4 },
      ],
    };
  }

  getHitPoints(level, modifier = '0') {
    let hitPoints = 0;
    if (level > 9) {
      const roll = Dice.roller.roll(`9${this.hitDice}+${level - 9}`);
      hitPoints = roll.total;
    } else {
      hitPoints = this.rollHitPoints(this.hitDice, level, modifier);
    }
    return hitPoints;
  }

  getSpells(level, wisScore = 10) {
    const spells = [];
    const spellSlots = this.spellsKnown[level];
    spellSlots.forEach(x => {
      if (x.known && x.known > 0) {
        let times;
        if (
          (x.known === 1 && wisScore >= 13) ||
          (x.known === 2 && wisScore >= 16) ||
          (x.known === 2 && wisScore >= 18)
        ) {
          times = 1 + x.known;
        } else {
          times = x.known;
        }
        spells.push(...Spells.getClericSpell(x.spellLevel, times));
      }
    });
    return spells;
  }

  getSummary(level, modifier = 0, intScore = 10, wisScore = 10) {
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
    const spellsKnown = this.getSpells(level, wisScore);
    if (spellsKnown && spellsKnown.length > 0) {
      summaryString += '**Memorized Spells:**\n';
      spellsKnown.forEach(spell => {
      summaryString += ` - ${spell.name}\n`;
      });
    }
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
    Equipment.equipCleric(gear);
    return gear;
  }
}

module.exports = Cleric;
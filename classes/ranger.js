const { ABILITIES } = require('../utils/ability-scores');
const Dice = require('../utils/dice');
const CharacterClass = require('./character-class');
const Spells = require('../utils/spells');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');


class Ranger extends CharacterClass {
  constructor() {
    super(
      [{ ability: ABILITIES.Constitution, value: 9 }, { ability: ABILITIES.Wisdom, value: 9 }],
      [ABILITIES.Strength],
      'd8',
      14,
      ['Alignment', 'Common'],
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
        { name: 'Awareness', minLevel: 1 },
        { name: 'Divine Magic', minLevel: 1 },
        { name: 'Foraging and Hunting', minLevel: 1 },
        { name: 'Limited Possesions', minLevel: 1 },
        { name: 'Foraging and Hunting', minLevel: 1 },
        { name: 'Pursuit', minLevel: 1 },
        { name: 'Stealth', minLevel: 1 },
        { name: 'Tracking', minLevel: 1 },
        { name: 'Followers', minLevel: 10 },
      ],
    );
    this.className = 'Ranger';
    this.spellsKnown = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [{ spellLevel: 1, known: 1 }],
      9: [
        { spellLevel: 1, known: 2 },
      ],
      10: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 1 },
      ],
      11: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
      ],
      12: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 1 },
      ],
      13: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 1 },
      ],
      14: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 3 },
        { spellLevel: 3, known: 2 },
      ],
    };
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
        spells.push(...Spells.getDruidSpell(x.spellLevel, times));
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
    Equipment.equipRanger(gear);
    return gear;
  }
}

module.exports = Ranger;
const { ABILITIES } = require('../utils/ability-scores');
const CharacterClass = require('./character-class');
const Dice = require('../utils/dice');
const Spells = require('../utils/spells');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');


class Elf extends CharacterClass {
  constructor() {
    super(
      [{ ability: ABILITIES.Intelligence, value: 9 }],
      [ABILITIES.Intelligence, ABILITIES.Strength],
      'd6',
      10,
      ['Alignment', 'Common', 'Elvish', 'Gnoll', 'Hobgoblin', 'Orcish'],
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
      ],
      {
        1: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 15 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        2: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 15 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        3: [
          { name: 'Death / poison', value: 12 },
          { name: 'Wands', value: 13 },
          { name: 'Paralysis / petrify', value: 13 },
          { name: 'Breath attacks', value: 15 },
          { name: 'Spells / rods / staves', value: 15 },
        ],
        4: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        5: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        6: [
          { name: 'Death / poison', value: 10 },
          { name: 'Wands', value: 11 },
          { name: 'Paralysis / petrify', value: 11 },
          { name: 'Breath attacks', value: 13 },
          { name: 'Spells / rods / staves', value: 12 },
        ],
        7: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        8: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        9: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 9 },
          { name: 'Breath attacks', value: 10 },
          { name: 'Spells / rods / staves', value: 10 },
        ],
        10: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 8 },
          { name: 'Spells / rods / staves', value: 8 },
        ],
      },
      [
        { name: 'Arcane Magic', minLevel: 1 },
        { name: 'Detect Secret Doors', minLevel: 1 },
        { name: 'Immunity to Ghoul Paralysis', minLevel: 1 },
        { name: 'Infravision', minLevel: 1 },
        { name: 'Listening at Doors', minLevel: 1 },
        { name: 'Stronghold', minLevel: 9 },
      ],
    );
    this.className = 'Elf';
    this.spellsKnown = {
      1: [
        { spellLevel: 1, known: 1 },
      ],
      2: [
        { spellLevel: 1, known: 2 },
      ],
      3: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 1 },
      ],
      4: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
      ],
      5: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 1 },
      ],
      6: [
        { spellLevel: 1, known: 2 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 2 },
      ],
      7: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 2 },
        { spellLevel: 3, known: 2 },
        { spellLevel: 4, known: 1 },
      ],
      8: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 3 },
        { spellLevel: 3, known: 2 },
        { spellLevel: 4, known: 2 },
      ],
      9: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 3 },
        { spellLevel: 3, known: 3 },
        { spellLevel: 4, known: 2 },
        { spellLevel: 5, known: 1 },
      ],
      10: [
        { spellLevel: 1, known: 3 },
        { spellLevel: 2, known: 3 },
        { spellLevel: 3, known: 3 },
        { spellLevel: 4, known: 3 },
        { spellLevel: 5, known: 2 },
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

  getSpells(level, intScore = 10) {
    const spells = [];
    const spellSlots = this.spellsKnown[level];
    spellSlots.forEach(x => {
      if (x.known && x.known > 0) {
        let times;
        if (
          (x.known === 1 && intScore >= 13) ||
          (x.known === 2 && intScore >= 16) ||
          (x.known === 2 && intScore >= 18)
        ) {
          times = 1 + x.known;
        } else {
          times = x.known;
        }
        spells.push(...Spells.getMagicUserSpell(x.spellLevel, times));
      }
    });
    return spells;
  }

  getSummary(level, conModifier = 0, intScore = 10) {
    let summaryString = `**Class:** ${this.className}\n`;
    summaryString += `**HP:** ${this.getHitPoints(level, conModifier)}\n`;
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
    const spellsKnown = this.getSpells(level, intScore);
    summaryString += '**Memorized Spells:**\n';
    spellsKnown.forEach(spell => {
      summaryString += ` - ${spell.name}\n`;
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
    Equipment.equipElf(gear);
    return gear;
  }
}

module.exports = Elf;
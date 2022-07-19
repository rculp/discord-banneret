const { ABILITIES } = require('../utils/ability-scores');
const CharacterClass = require('./character-class');
const Spells = require('../utils/spells');
const Equipment = require('../utils/equipment');
const { getNewLanguage } = require('../utils/languages');


class Gnome extends CharacterClass {
  constructor() {
    super(
      [{ ability: ABILITIES.Constitution, value: 9 }],
      [ABILITIES.Dexterity, ABILITIES.Intelligence],
      'd4',
      8,
      ['Alignment', 'Common', 'the secret language of burrowing mammals'],
      [
        { level: 1, bonus: '0' },
        { level: 2, bonus: '0' },
        { level: 3, bonus: '0' },
        { level: 4, bonus: '0' },
        { level: 5, bonus: '0' },
        { level: 6, bonus: '+2' },
        { level: 7, bonus: '+2' },
        { level: 8, bonus: '+2' },
      ],
      {
        1: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 11 },
        ],
        2: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 11 },
        ],
        3: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 11 },
        ],
        4: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 11 },
        ],
        5: [
          { name: 'Death / poison', value: 8 },
          { name: 'Wands', value: 9 },
          { name: 'Paralysis / petrify', value: 10 },
          { name: 'Breath attacks', value: 14 },
          { name: 'Spells / rods / staves', value: 11 },
        ],
        6: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
        7: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
        8: [
          { name: 'Death / poison', value: 6 },
          { name: 'Wands', value: 7 },
          { name: 'Paralysis / petrify', value: 8 },
          { name: 'Breath attacks', value: 11 },
          { name: 'Spells / rods / staves', value: 9 },
        ],
      },
      [
        { name: 'Arcane Magic', minLevel: 1 },
        { name: 'Defensive Bonus', minLevel: 1 },
        { name: 'Detect Construction Tricks', minLevel: 1 },
        { name: 'Hiding', minLevel: 1 },
        { name: 'Infravision', minLevel: 1 },
        { name: 'Listening at Doors', minLevel: 1 },
        { name: 'Speak with Burrowing Mammals', minLevel: 1 },
        { name: 'Stronghold', minLevel: 8 },
      ],
    );
    this.className = 'Gnome';
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
    };
  }

  getHitPoints(level, modifier = '0') {
    let hitPoints = 0;
    hitPoints = this.rollHitPoints(this.hitDice, level, modifier);
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
        spells.push(...Spells.getIllusionistSpell(x.spellLevel, times));
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
    Equipment.equipGnome(gear);
    return gear;
  }
}

module.exports = Gnome;
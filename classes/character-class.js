const Dice = require('../utils/dice');

class CharacterClass {
  constructor(reqsArray, primeReqArray, hitDice, maxLevel, languagesArray, attackBonusArray, savingThrows, abilitiesArray) {
    this.requirements = reqsArray;
    this.primeRequisite = primeReqArray;
    this.hitDice = hitDice;
    this.maxLevel = maxLevel;
    this.attackBonus = attackBonusArray;
    this.languages = languagesArray;
    this.savingThrows = savingThrows;
    this.classAbilities = abilitiesArray;
  }
  rollHitPoints(hitDice, level, modifier) {
    const roll = Dice.roller.roll(`${level}${this.hitDice}+${modifier * level}`);
    if (level === 1 && roll.rolls[0].value <= 2) {
      return this.rollHitPoints(hitDice, level, modifier);
    }
    return roll.total;
  }
}

module.exports = CharacterClass;
const { DiceRoller, NumberGenerator } = require('@dice-roller/rpg-dice-roller');

const roller = new DiceRoller();

const engines = NumberGenerator.engines;
const generator = NumberGenerator.generator;

// use the nodeCypto engine
generator.engine = engines.nodeCrypto;

exports.roller = roller;


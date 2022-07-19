const Dice = require('./dice');

const languagesList = [
  'Bugbear',
  'Deepcommon',
  'Dragon',
  'Dwarvish',
  'Elvish',
  'Gargoyle',
  'Gnoll',
  'Gnomish',
  'Goblin',
  'Halfling',
  'Harpy',
  'Hobgoblin',
  'Kobold',
  'Lizardfolk',
  'Medusa',
  'Minotaur',
  'Ogre',
  'Orcish',
  'Pixie',
  'Human dialect',
];

function addLanguage(knownLanguages, times = 1) {
  const die = `1d${languagesList.length}`;
  const results = knownLanguages;
  for (let i = 0; i < times; i++) {
    const language = languagesList[Dice.roller.roll(die).total - 1];
    const alreadyKnown = results.includes(language);
    if (alreadyKnown) {
      addLanguage(results);
    }
    results.push(language);
  }
  return;
}

module.exports = {
	languages: languagesList,
	getNewLanguage: (knownLanguages, times = 1) => {
    addLanguage(knownLanguages, times);
  },
};
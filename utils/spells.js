const Dice = require('./dice');

const clericSpells = {
  1: [
    { name: 'Cure Light Wounds', level: '1st', reversed: 'Cause Light Wounds' },
    { name: 'Detect Evil', level: '1st' },
    { name: 'Detect Magic', level: '1st' },
    { name: 'Light', level: '1st', reversed: 'Darkness' },
    { name: 'Protection from Evil', level: '1st' },
    { name: 'Purify Food and Water', level: '1st' },
    { name: 'Remove Fear', level: '1st', reversed: 'Cause Fear' },
    { name: 'Resist Cold', level: '1st' },
  ],
  2: [
    { name: 'Bless', level: '2nd', reversed: 'Blight' },
    { name: 'Detect Traps', level: '2nd' },
    { name: 'Hold Person', level: '2nd' },
    { name: 'Know Alignment', level: '2nd' },
    { name: 'Resist Fire', level: '2nd' },
    { name: 'Silence 15\' Radius', level: '2nd' },
    { name: 'Snake Charm', level: '2nd' },
    { name: 'Speak with Animals', level: '2nd' },
  ],
  3: [
    { name: 'Continual Light', level: '3rd', reversed: 'Continual Darkness' },
    { name: 'Cure Disease', level: '3rd', reversed: 'Cause Disease' },
    { name: 'Growth of Animal', level: '3rd' },
    { name: 'Locate Object', level: '3rd' },
    { name: 'Remove Curse', level: '3rd', reversed: 'Curse' },
    { name: 'Striking', level: '3rd' },
  ],
  4: [
    { name: 'Create Water', level: '4th' },
    { name: 'Cure Serious Wounds', level: '4th', reversed: 'Cause Serious Wounds' },
    { name: 'Neutralize Poison', level: '4th' },
    { name: 'Protection from Evil 10\' Radius', level: '4th' },
    { name: 'Speak with Plants', level: '4th' },
    { name: 'Sticks to Snakes', level: '4th' },
  ],
  5: [
    { name: 'Commune', level: '5th' },
    { name: 'Create Food', level: '5th' },
    { name: 'Dispel Evil', level: '5th' },
    { name: 'Insect Plague', level: '5th' },
    { name: 'Quest', level: '5th', reversed: 'Remove Quest' },
    { name: 'Raise Dead', level: '5th', reversed: 'Finger of Death' },
  ],
};

const druidSpells = {
  1: [
    { name: 'Animal Friendship', level: '1st' },
    { name: 'Detect Danger', level: '1st' },
    { name: 'Entangle', level: '1st' },
    { name: 'Faerie Fire', level: '1st' },
    { name: 'Invisibility to Animals', level: '1st' },
    { name: 'Locate Plant or Animal', level: '1st' },
    { name: 'Predict Weather', level: '1st' },
    { name: 'Speak with Animals', level: '1st' },
  ],
  2: [
    { name: 'Barkskin', level: '2nd' },
    { name: 'Create Water', level: '2nd' },
    { name: 'Cure Light Wounds', level: '2nd', reversed: 'Cause Light Wounds' },
    { name: 'Heat Metal', level: '2nd' },
    { name: 'Obscuring Mist', level: '2nd' },
    { name: 'Produce Flame', level: '2nd' },
    { name: 'Slow Poison', level: '2nd' },
    { name: 'Warp Wood', level: '2nd' },
  ],
  3: [
    { name: 'Call Lightning', level: '3rd' },
    { name: 'Growth of Nature', level: '3rd' },
    { name: 'Hold Animal', level: '3rd' },
    { name: 'Protection from Poison', level: '3rd' },
    { name: 'Tree Shape', level: '3rd' },
    { name: 'Water Breathing', level: '3rd', reversed: 'Air Breathing' },
  ],
  4: [
    { name: 'Cure Serious Wounds', level: '4th', reversed: 'Cause Serious Wounds' },
    { name: 'Dispel Magic', level: '4th' },
    { name: 'Protection from Fire and Lightning', level: '4th' },
    { name: 'Speak with Plants', level: '4th' },
    { name: 'Summon Animals', level: '4th' },
    { name: 'Temperature Control', level: '4th' },
  ],
  5: [
    { name: 'Commune with Nature', level: '5th' },
    { name: 'Control Weather', level: '5th' },
    { name: 'Pass Plant', level: '5th' },
    { name: 'Protection from Plants and Animals', level: '5th' },
    { name: 'Transmute Rock to Mud', level: '5th', reversed: 'Mud to Rock' },
    { name: 'Wall of Thorns', level: '5th' },
  ],
};

const illusionistSpells = {
  1: [
    { name: 'Auditory Illusion', level: '1st' },
    { name: 'Chromatic Orb', level: '1st' },
    { name: 'Colour Spray', level: '1st' },
    { name: 'Dancing Lights', level: '1st' },
    { name: 'Detect Illusion', level: '1st' },
    { name: 'Glamour', level: '1st' },
    { name: 'Hypnotism', level: '1st' },
    { name: 'Light', level: '1st', reversed: 'Darkness' },
    { name: 'Phantasmal Force', level: '1st' },
    { name: 'Read Magic', level: '1st' },
    { name: 'Spook', level: '1st' },
    { name: 'Wall of Fog', level: '1st' },
  ],
  2: [
    { name: 'Blindness / Deafness', level: '2nd' },
    { name: 'Blur', level: '2nd' },
    { name: 'Detect Magic', level: '2nd' },
    { name: 'False Aura', level: '2nd' },
    { name: 'Fascinate', level: '2nd' },
    { name: 'Hypnotic Pattern', level: '2nd' },
    { name: 'Improved Phantasmal Force', level: '2nd' },
    { name: 'Invisibility', level: '2nd' },
    { name: 'Magic Mouth', level: '2nd' },
    { name: 'Mirror Image', level: '2nd' },
    { name: 'Quasimorph', level: '2nd' },
    { name: 'Whispering Wind', level: '2nd' },
  ],
  3: [
    { name: 'Blacklight', level: '3rd' },
    { name: 'Dispel Illusion', level: '3rd' },
    { name: 'Fear', level: '3rd' },
    { name: 'Hallucinatory Terrain', level: '3rd' },
    { name: 'Invisibility 10\' Radius', level: '3rd' },
    { name: 'Nondetection', level: '3rd' },
    { name: 'Paralysation', level: '3rd' },
    { name: 'Phantom Steed', level: '3rd' },
    { name: 'Rope Trick', level: '3rd' },
    { name: 'Spectral Force', level: '3rd' },
    { name: 'Suggestion', level: '3rd' },
    { name: 'Wraithform', level: '3rd' },
  ],
  4: [
    { name: 'Confusion', level: '4th' },
    { name: 'Dispel Magic', level: '4th' },
    { name: 'Emotion', level: '4th' },
    { name: 'Illusory Stamina', level: '4th' },
    { name: 'Improved Invisibility', level: '4th' },
    { name: 'Massmorph', level: '4th' },
    { name: 'Minor Creation', level: '4th' },
    { name: 'Phantasmal Killer', level: '4th' },
    { name: 'Rainbow Pattern', level: '4th' },
    { name: 'Shadow Monsters', level: '4th' },
    { name: 'Solid Fog', level: '4th' },
    { name: 'Veil of Abandonment', level: '4th' },
  ],
  5: [
    { name: 'Chaos', level: '5th' },
    { name: 'Demi-Shadow Monsters', level: '5th' },
    { name: 'Illusion', level: '5th' },
    { name: 'Looking Glass', level: '5th' },
    { name: 'Major Creation', level: '5th' },
    { name: 'Maze of Mirrors', level: '5th' },
    { name: 'Projected Image', level: '5th' },
    { name: 'Seeming', level: '5th' },
    { name: 'Shadowcast', level: '5th' },
    { name: 'Shadowy Transformation', level: '5th' },
    { name: 'Time Flow', level: '5th' },
    { name: 'Visitation', level: '5th' },
  ],
  6: [
    { name: 'Acid Fog', level: '6th' },
    { name: 'Dream Quest', level: '6th' },
    { name: 'Impersonation', level: '6th' },
    { name: 'Manifest Dream', level: '6th' },
    { name: 'Mass Suggestion', level: '6th' },
    { name: 'Mislead', level: '6th' },
    { name: 'Permanent Illusion', level: '6th' },
    { name: 'Shades', level: '6th' },
    { name: 'Through the Looking Glass', level: '6th' },
    { name: 'Triggered Illusion', level: '6th' },
    { name: 'True Seeing', level: '6th' },
    { name: 'Vision', level: '6th' },
  ],
};

const magicUserSpells = {
  1: [
    { name: 'Charm Person', level: '1st' },
    { name: 'Detect Magic', level: '1st' },
    { name: 'Floating Disc', level: '1st' },
    { name: 'Hold Portal', level: '1st' },
    { name: 'Light', level: '1st', reversed: 'Darkness' },
    { name: 'Magic Missile', level: '1st' },
    { name: 'Protection from Evil', level: '1st' },
    { name: 'Read Languages', level: '1st' },
    { name: 'Read Magic', level: '1st' },
    { name: 'Shield', level: '1st' },
    { name: 'Sleep', level: '1st' },
    { name: 'Ventriloquism', level: '1st' },
  ],
  2: [
    { name: 'Continual Light', level: '2nd', reversed: 'Continual Darkness' },
    { name: 'Detect Evil', level: '2nd' },
    { name: 'Detect Invisible', level: '2nd' },
    { name: 'ESP', level: '2nd' },
    { name: 'Invisibility', level: '2nd' },
    { name: 'Knock', level: '2nd' },
    { name: 'Levitate', level: '2nd' },
    { name: 'Locate Object', level: '2nd' },
    { name: 'Mirror Image', level: '2nd' },
    { name: 'Phantasmal Force', level: '2nd' },
    { name: 'Web', level: '2nd' },
    { name: 'Wizard Lock', level: '2nd' },
  ],
  3: [
    { name: 'Clairvoyance', level: '3rd' },
    { name: 'Dispel Magic', level: '3rd' },
    { name: 'Fire Ball', level: '3rd' },
    { name: 'Fly', level: '3rd' },
    { name: 'Haste', level: '3rd' },
    { name: 'Hold Person', level: '3rd' },
    { name: 'Infravision', level: '3rd' },
    { name: 'Invisibility 10\' Radius', level: '3rd' },
    { name: 'Lightning Bolt', level: '3rd' },
    { name: 'Protection from Evil 10\' Radius', level: '3rd' },
    { name: 'Protection from Normal Missiles', level: '3rd' },
    { name: 'Water Breathing', level: '3rd', reversed: 'Air Breathing' },
  ],
  4: [
    { name: 'Charm Monster', level: '4th' },
    { name: 'Confusion', level: '4th' },
    { name: 'Dimension Door', level: '4th' },
    { name: 'Growth of Plants', level: '4th' },
    { name: 'Hallucinatory Terrain', level: '4th' },
    { name: 'Massmorph', level: '4th' },
    { name: 'Polymorph Others', level: '4th' },
    { name: 'Polymorph Self', level: '4th' },
    { name: 'Remove Curse', level: '4th', reversed: 'Curse' },
    { name: 'Wall of Fire', level: '4th' },
    { name: 'Wall of Ice', level: '4th' },
    { name: 'Wizard Eye', level: '4th' },
  ],
  5: [
    { name: 'Animate Dead', level: '5th' },
    { name: 'Cloudkill', level: '5th' },
    { name: 'Conjure Elemental', level: '5th' },
    { name: 'Contact Higher Plane', level: '5th' },
    { name: 'Feeblemind', level: '5th' },
    { name: 'Hold Monster', level: '5th' },
    { name: 'Magic Jar', level: '5th' },
    { name: 'Pass-Wall', level: '5th' },
    { name: 'Telekinesis', level: '5th' },
    { name: 'Teleport', level: '5th' },
    { name: 'Transmute Rock to Mud', level: '5th', reversed: 'Mud to Rock' },
    { name: 'Wall of Stone', level: '5th' },
  ],
  6: [
    { name: 'Anti-Magic Shell', level: '6th' },
    { name: 'Control Weather', level: '6th' },
    { name: 'Death Spell', level: '6th' },
    { name: 'Disintegrate', level: '6th' },
    { name: 'Geas', level: '6th', reversed: 'Remove Geas' },
    { name: 'Invisible Stalker', level: '6th' },
    { name: 'Lower Water', level: '6th' },
    { name: 'Move Earth', level: '6th' },
    { name: 'Part Water', level: '6th' },
    { name: 'Projected Image', level: '6th' },
    { name: 'Reincarnation', level: '6th' },
    { name: 'Stone to Flesh', level: '6th', reversed: 'Flesh to Stone' },
  ],
};

function getSpellsByLevel(spellList, level, times = 1) {
  const list = spellList[level];
  if (list) {
    const results = [];
    const die = `1d${list.length}`;
    for (let i = 0; i < times; i++) {
      const foundSpell = list[Dice.roller.roll(die).total - 1];
      const alreadyKnown = results.find(spell => spell.name === foundSpell.name);
      if (alreadyKnown) {
        results.push(...getSpellsByLevel(spellList, level));
      }
      results.push({ ...foundSpell });
    }
    return results;
  }
}

module.exports = {
  getClericSpell: (level, times = 1) => {
    return getSpellsByLevel(clericSpells, level, times);
  },
  getDruidSpell: (level, times = 1) => {
    return getSpellsByLevel(druidSpells, level, times);
  },
  getIllusionistSpell: (level, times = 1) => {
    return getSpellsByLevel(illusionistSpells, level, times);
  },
  getMagicUserSpell: (level, times = 1) => {
    return getSpellsByLevel(magicUserSpells, level, times);
  },
};
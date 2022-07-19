const Dice = require('./dice');

const randomGearList = [
  [{ name: 'Bedroll' }],
  [{ name: 'Chalk', quantity: 10 }],
  [{ name: 'Crowbar' }],
  [{ name: 'Hammer (small)' }, { name: 'Iron spike', quantity: 12 }],
  [{ name: 'Ink (vial)' }, { name: 'Quill' }, { name: 'Paper (sheet)', quantity: 5 }],
  [{ name: 'Holy water' }],
  [{ name: 'Lantern' }, { name: 'Oil (flask)', quantity: 3 }],
  [{ name: 'Mirror (hand-sized, steel)' }],
  [{ name: 'Pole (10\' long, wooden)' }],
  [{ name: 'Rope (50\')' }],
  [{ name: 'Rope (50\')' }, { name: 'Grappling hook' }],
  [{ name: 'Shovel' }],
  [{ name: 'Sledgehammer' }],
  [{ name: 'Musical instrument (stringed)' }],
  [{ name: 'Musical instrument (wind)' }],
  [{ name: 'Sack (large)' }],
  [{ name: 'Sack (small)' }],
  [{ name: 'Mirror (hand-sized, steel)' }],
  [{ name: 'Twine (100\' ball)' }],
  [{ name: 'Mallet' }, { name: 'Stake', quantity: '3' }],
  [{ name: 'Wolfsbane, bunch', quantity: 1 }],
];

const bardRangerArmour = [
  [],
  [{ name: 'Shield' }],
  [{ name: 'Leather' }],
  [{ name: 'Leather' }, { name: 'Shield' }],
  [{ name: 'Chainmail' }],
  [{ name: 'Chainmail' }, { name: 'Shield' }],
];

const druidArmour = [
  [],
  [{ name: 'Shield, wooden' }],
  [{ name: 'Leather' }],
  [{ name: 'Leather' }, { name: 'Shield, wooden' }],
];

const druidWeapons = [
  [{ name: 'Club' }],
  [{ name: 'Dagger' }],
  [{ name: 'Sling' }, { name: 'Sling stone', quantity: 20 }],
  [{ name: 'Staff' }],
];

const gnomeArmour = [
  [],
  [{ name: 'Shield' }],
  [{ name: 'Leather' }],
  [{ name: 'Leather' }, { name: 'Shield' }],
];

const gnomeWeapons = [
  [{ name: 'Dagger' }],
  [{ name: 'Sling' }, { name: 'Sling stone', quantity: 20 }],
  [{ name: 'Short bow' }, { name: 'Arrow', quantity: 20 }],
  [{ name: 'Short sword' }],
];

const dwarfHalflingWeapons = [
  [{ name: 'Dagger' }],
  [{ name: 'Mace' }],
  [{ name: 'Short bow' }, { name: 'Arrow', quantity: 20 }],
  [{ name: 'Hand axe', quantity: 2 }],
  [{ name: 'Short sword' }],
  [{ name: 'War hammer' }],
];

const standardArmour = [
  [{ name: 'Leather' }],
  [{ name: 'Leather' }, { name: 'Shield' }],
  [{ name: 'Chainmail' }],
  [{ name: 'Chainmail' }, { name: 'Shield' }],
  [{ name: 'Plate mail' }],
  [{ name: 'Plate mail' }, { name: 'Shield' }],
];

const clericWeapons = [
  [{ name: 'Club' }],
  [{ name: 'Mace' }],
  [{ name: 'Sling' }, { name: 'Sling stone', quantity: 20 }],
  [{ name: 'Sling' }, { name: 'Sling stone', quantity: 20 }],
  [{ name: 'Staff' }],
  [{ name: 'Warhammer' }],
];

const fighterWeapons = [
  [{ name: 'Dagger' }],
  [{ name: 'Mace' }],
  [{ name: 'Short bow' }, { name: 'Arrow', quantity: 20 }],
  [{ name: 'Short sword' }],
  [{ name: 'Spear' }],
  [{ name: 'Sword' }],
];

const magicUserWeapons = [
  [{ name: 'Dagger' }],
  [{ name: 'Dagger', quantity: 3 }],
  [{ name: 'Sling' }, { name: 'Sling stone', quantity: 20 }],
  [{ name: 'Staff' }],
];

const thiefArmour = [
  [],
  [],
  [],
  [{ name: 'Leather' }],
  [{ name: 'Leather' }],
  [{ name: 'Leather' }],
];

const bardRangerThiefWeapons = [
  [{ name: 'Club' }],
  [{ name: 'Dagger', quantity: 3 }],
  [{ name: 'Sling' }, { name: 'Sling stone', quantity: 20 }],
  [{ name: 'Short bow' }, { name: 'Arrow', quantity: 20 }],
  [{ name: 'Short sword' }],
  [{ name: 'Sword' }],
];

function randomGear(gear, times = 1) {
  const die = `1d${randomGearList.length}`;
  for (let i = 0; i < times; i++) {
    randomGearList[Dice.roller.roll(die).total - 1].forEach(newItem => {
      const existingItem = gear.equipment.find(item => item.name === newItem.name);
      if (existingItem) {
        const initialQuantity = existingItem.quantity ? existingItem.quantity : 1;
        const additionalQuantity = newItem.quantity ? newItem.quantity : 1;
        existingItem.quantity = initialQuantity + additionalQuantity;
      } else {
        gear.equipment.push({ ...newItem });
      }
    });
  }
}

function randomArmour(gear, armourList, times = 1) {
  const die = `1d${armourList.length}`;
  for (let i = 0; i < times; i++) {
    armourList[Dice.roller.roll(die).total - 1].forEach(newArmour => {
      const existingArmour = gear.armour.find(armour => armour.name === newArmour.name);
      if (existingArmour) {
        const initialQuantity = existingArmour.quantity ? existingArmour.quantity : 1;
        const additionalQuantity = newArmour.quantity ? newArmour.quantity : 1;
        existingArmour.quantity = initialQuantity + additionalQuantity;
      } else {
        gear.armour.push({ ...newArmour });
      }
    });
  }
}

function randomWeapon(gear, weaponList, times = 1) {
  const die = `1d${weaponList.length}`;
  for (let i = 0; i < times; i++) {
    weaponList[Dice.roller.roll(die).total - 1].forEach(newWeapon => {
      const existingWeapon = gear.weapons.find(weapon => weapon.name === newWeapon.name);
      if (existingWeapon) {
        const initialQuantity = existingWeapon.quantity ? existingWeapon.quantity : 1;
        const additionalQuantity = newWeapon.quantity ? newWeapon.quantity : 1;
        existingWeapon.quantity = initialQuantity + additionalQuantity;
      } else {
        gear.weapons.push({ ...newWeapon });
      }
    });
  }
}

module.exports = {
  new: () => {
    return {
      armour: [],
			equipment: [
				{ name: 'Backpack' },
				{ name: 'Tinderbox' },
				{ name: 'Torch', quantity: Dice.roller.roll('1d6').total },
        { name: 'Waterskin' },
        { name: 'Rations (iron)', quantity: Dice.roller.roll('1d6').total },
			],
      gold: Dice.roller.roll('3d6').total,
      weapons: [],
		};
  },
  addAdventuringGear: randomGear,
  equipBard: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Holy symbol' });
    randomArmour(gear, bardRangerArmour);
    randomWeapon(gear, bardRangerThiefWeapons, 2);
  },
  equipCleric: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Holy symbol' });
    randomArmour(gear, standardArmour);
    randomWeapon(gear, clericWeapons, 2);
  },
  equipDruid: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Holy symbol' });
    randomArmour(gear, druidArmour);
    randomWeapon(gear, druidWeapons, 2);
  },
  equipDwarf: (gear) => {
    randomGear(gear, 2);
    randomArmour(gear, standardArmour);
    randomWeapon(gear, dwarfHalflingWeapons, 2);
  },
  equipElf: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Spell book' });
    randomArmour(gear, standardArmour);
    randomWeapon(gear, fighterWeapons, 2);
  },
  equipFighter: (gear) => {
    randomGear(gear, 2);
    randomArmour(gear, standardArmour);
    randomWeapon(gear, fighterWeapons, 2);
  },
  equipGnome: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Spell book' });
    randomArmour(gear, gnomeArmour);
    randomWeapon(gear, gnomeWeapons, 2);
  },
  equipHalfling: (gear) => {
    randomGear(gear, 2);
    randomArmour(gear, standardArmour);
    randomWeapon(gear, dwarfHalflingWeapons, 2);
  },
  equipIllusionist: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Spell book' });
    randomWeapon(gear, magicUserWeapons, 2);
  },
  equipMagicUser: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Spell book' });
    randomWeapon(gear, magicUserWeapons, 2);
  },
  equipPaladin: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Holy symbol' });
    randomArmour(gear, standardArmour);
    randomWeapon(gear, fighterWeapons, 2);
  },
  equipRanger: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Holy symbol' });
    randomArmour(gear, bardRangerArmour);
    randomWeapon(gear, bardRangerThiefWeapons, 2);
  },
  equipThief: (gear) => {
    randomGear(gear, 2);
    gear.equipment.push({ name: 'Thieves\' tools' });
    randomArmour(gear, thiefArmour);
    randomWeapon(gear, bardRangerThiefWeapons, 2);
  },
};
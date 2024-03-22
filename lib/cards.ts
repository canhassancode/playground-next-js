export const card = [
  {
    name: "The One Ring",
    type: "Legendary Artifact",
    description: `Indestructible 
    When The One Ring enters the battlefield, if you cast it, you gain protection from everything until your next turn. 
    At the beginning of your upkeep, you lose 1 life for each burden counter on The One Ring.
    1: Put a burden counter on The One Ring, then draw a card for each burden counter on The One Ring.`,
    cost: 4,
    power: null,
    health: null,
  },
  {
    name: "Aragorn and Arwen, Wed",
    type: "Legendary Creature — Human Elf Noble",
    description: `Vigilance
    Whenever Aragorn and Arwen, Wed enters the battlefield or attacks, put a +1/+1 counter on each other creature you control. 
    You gain 1 life for each other creature you control..`,
    cost: 4,
    power: 3,
    health: 6,
  },
  {
    name: "Arwen, Mortal Queen",
    type: "Legendary Creature — Elf Noble",
    description: `Arwen, Mortal Queen enters the battlefield with an indestructible counter on it.
    1, Remove an indestructible counter from Arwen: Another target creature gains indestructible until end of turn. 
    Put a +1/+1 counter and a lifelink counter on that creature and a +1/+1 counter and a lifelink counter on Arwen.`,
    cost: 1,
    power: 2,
    health: 2,
  },
  {
    name: "Sauron, the Dark Lord",
    type: "Legendary Creature — Avatar Horror",
    description: `Ward—Sacrifice a legendary artifact or legendary creature.
    Whenever an opponent casts a spell, amass Orcs 1.
    Whenever an Army you control deals combat damage to a player, the Ring tempts you.
    Whenever the Ring tempts you, you may discard your hand. If you do, draw four cards.`,
    cost: 3,
    power: 7,
    health: 6,
  },
  {
    name: "Gandalf the Grey",
    type: "Legendary Creature — Avatar Wizard",
    description: `Whenever you cast an instant or sorcery spell. choose one that hasn't been chosen:
    • You may tap or untap target permanent.
    • Gandalf the Grey deals 3 damage to each opponent.
    • Copy target instant or sorcery spell you control. You may choose new targets for the copy.
    • Put Gandalf on top of its owner's library.`,
    cost: 3,
    power: 3,
    health: 4,
  },
] as const;

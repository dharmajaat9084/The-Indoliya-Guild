import type { GeneratedCharacter } from './types';
import { CharacterClass, Rank } from './types';

// The SIBLINGS array is now populated with complete, static character data.
export const SIBLINGS: GeneratedCharacter[] = [
  {
    id: 1,
    name: 'Dharmendra Singh Indoliya',
    alias: 'DharMa',
    title: 'Monarch of the Iron Fortress',
    description: 'His indomitable will manifests as an unbreakable defense.',
    class: CharacterClass.TANK,
    rank: Rank.S_RANK,
    quote: 'Come, break upon my shield.',
    imageUrl: 'https://beeimg.com/images/q11202338083.jpg',
    backstory: 'Once a humble guardian of a forgotten citadel, Dharmendra awakened as a Tank after single-handedly holding a collapsing gate against a horde of beasts. His body became as resilient as the ancient stone he protected.',
    stats: { strength: 95, agility: 40, mana: 50, perception: 65 },
    skills: [
        { name: 'Taunting Shout', description: 'Forces all nearby enemies to focus their attacks on him.' },
        { name: 'Unbreakable Will', description: 'Temporarily becomes immune to all damage and crowd control effects.' },
        { name: 'Shield Bash', description: 'A powerful blow that stuns a single target and deals significant damage.' }
    ]
  },
  {
    id: 2,
    name: 'Anuj Singh Indoliya',
    title: 'The Silent Blade',
    description: 'He moves through shadows, a whisper of impending doom.',
    class: CharacterClass.ASSASSIN,
    rank: Rank.A_RANK,
    quote: 'Already behind you.',
    imageUrl: 'https://beeimg.com/images/g74157134833.jpg',
    backstory: 'Anuj was a master of stealth long before his awakening. When a mana gate opened in his city, he used the ensuing chaos to hunt the monsters from the shadows, awakening his assassin class abilities in the process.',
    stats: { strength: 70, agility: 98, mana: 45, perception: 85 },
    skills: [
        { name: 'Shadow Step', description: 'Instantly teleports behind a target within his line of sight.' },
        { name: 'Vital Strike', description: 'A precise attack that targets an enemy\'s weak point, dealing critical damage.' },
        { name: 'Cloak of Night', description: 'Becomes invisible for a short period, undetectable by most enemies.' }
    ]
  },
  {
    id: 3,
    name: 'Anurag Singh Indoliya',
    title: 'Arcane Weaver',
    description: 'Reality bends to his command, weaving spells of immense power.',
    class: CharacterClass.MAGE,
    rank: Rank.S_RANK,
    quote: 'Witness true magic.',
    imageUrl: 'https://beeimg.com/images/h63174871881.jpg',
    backstory: 'A scholar obsessed with the flow of mana, Anurag\'s awakening was a moment of pure intellectual breakthrough. He deciphered an ancient rune during a dungeon raid, and the resulting explosion of power made him an S-Rank Mage.',
    stats: { strength: 30, agility: 55, mana: 100, perception: 75 },
    skills: [
        { name: 'Meteor Fall', description: 'Summons a meteor from the sky to obliterate a large area.' },
        { name: 'Arcane Barrier', description: 'Creates a magical shield that absorbs incoming magical attacks.' },
        { name: 'Chain Lightning', description: 'Unleashes a bolt of lightning that arcs between multiple enemies.' }
    ]
  },
  {
    id: 4,
    name: 'Kush Singh Indoliya',
    title: 'Beast Sovereign',
    description: 'The wildest of creatures answer his call to battle.',
    class: CharacterClass.SUMMONER,
    rank: Rank.A_RANK,
    quote: 'My pack is eternal.',
    imageUrl: 'https://beeimg.com/images/q44506368783.jpg',
    backstory: 'Kush always felt a stronger connection to animals than people. During a forest fire caused by a dungeon break, he risked his life to save a pack of wolves, and in return, their alpha spirit bonded with him, awakening his summoning abilities.',
    stats: { strength: 50, agility: 60, mana: 85, perception: 90 },
    skills: [
        { name: 'Summon: Fenrir', description: 'Calls forth a giant shadow wolf to fight by his side.' },
        { name: 'Beastial Vigor', description: 'Empowers all summoned creatures, increasing their attack and defense.' },
        { name: 'Primal Bond', description: 'Allows him to share senses with his summons, scouting dangerous areas safely.' }
    ]
  },
  {
    id: 5,
    name: 'Ankit Singh Indoliya',
    title: 'The Unseen Arrow',
    description: 'From leagues away, his arrows find their mark with unerring accuracy.',
    class: CharacterClass.RANGER,
    rank: Rank.B_RANK,
    quote: 'Nowhere to run.',
    imageUrl: 'https://beeimg.com/images/m95586609544.jpg',
    backstory: 'A former archery champion, Ankit\'s awakening occurred when he infused his arrow with mana subconsciously to hit an impossible shot, saving civilians from a stray monster. His senses sharpened, and his range became legendary.',
    stats: { strength: 60, agility: 80, mana: 65, perception: 95 },
    skills: [
        { name: 'Eagle Eye', description: 'Dramatically increases his visual range and accuracy for a single, perfect shot.' },
        { name: 'Arrow Rain', description: 'Fires a volley of arrows into the sky that rains down on a designated area.' },
        { name: 'Ensnaring Trap', description: 'Places a hidden magical trap that immobilizes the first enemy to step on it.' }
    ]
  },
  {
    id: 6,
    name: 'Anjali Singh Indoliya',
    title: 'The Lifebloom Guardian',
    description: 'Her touch can mend the most grievous wounds and restore life.',
    class: CharacterClass.HEALER,
    rank: Rank.A_RANK,
    quote: 'I am your hope.',
    imageUrl: 'https://beeimg.com/images/j90069839072.jpg',
    backstory: 'Anjali awakened her powers not in combat, but in its aftermath. Seeing the devastation a dungeon break left behind, she felt an overwhelming urge to help, and a warm, healing light emanated from her hands, closing wounds and saving lives.',
    stats: { strength: 40, agility: 65, mana: 90, perception: 80 },
    skills: [
        { name: 'Sanctuary', description: 'Creates a sacred area where allies rapidly regenerate health.' },
        { name: 'Purification', description: 'Removes all harmful curses and poisons from her allies.' },
        { name: 'Resurrection', description: 'A powerful spell that can bring a recently fallen ally back to life.' }
    ]
  },
];
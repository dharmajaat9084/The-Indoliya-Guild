export interface Sibling {
  id: number;
  name: string;
  alias?: string;
}

export enum CharacterClass {
  MONARCH = 'MONARCH',
  ASSASSIN = 'ASSASSIN',
  MAGE = 'MAGE',
  HEALER = 'HEALER',
  TANK = 'TANK',
  RANGER = 'RANGER',
  FIGHTER = 'FIGHTER',
  SUMMONER = 'SUMMONER',
}

export enum Rank {
  S_RANK = 'S-Rank',
  A_RANK = 'A-Rank',
  B_RANK = 'B-Rank',
  C_RANK = 'C-Rank',
}

export interface Skill {
  name: string;
  description: string;
}

export interface Stats {
  strength: number;
  agility: number;
  mana: number;
  perception: number;
}


export interface GeneratedInfo {
  name: string;
  title: string;
  description: string;
  class: CharacterClass;
  rank: Rank;
  quote: string;
  backstory: string;
  stats: Stats;
  skills: Skill[];
}

export type GeneratedCharacter = Sibling & GeneratedInfo & {
  imageUrl: string;
};

// Types for Guild Archives
export interface Dungeon {
  name: string;
  rank: Rank;
  description: string;
}

export interface Artifact {
  name: string;
  icon: string; // SVG path data
  description: string;
}

export interface GuildLore {
  foundingHistory: string[]; // Array of paragraphs
  dungeons: Dungeon[];
  artifacts: Artifact[];
}
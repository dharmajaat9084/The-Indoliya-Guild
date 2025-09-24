import type { GuildLore } from './types';
import { Rank } from './types';

export const GUILD_LORE: GuildLore = {
  foundingHistory: [
    "The world remembers the day the sky tore open. Gates to other dimensions appeared, spewing forth magical beasts and altering the very fabric of reality. In this chaos, humans began to awaken, imbued with supernatural powers. They became Hunters, humanity's sole defense against the horrors from the dungeons.",
    "Among them were the Indoliya siblings. Scattered by the cataclysm but united by blood, each awakened with a power that mirrored their innermost nature. Dharmendra, the unwavering protector, became a living fortress. Anuj, always watchful from the periphery, became a phantom in the shadows. Anurag, the seeker of knowledge, unlocked the arcane secrets of mana itself.",
    "Individually, they were formidable. But they soon realized the deadliest dungeons could not be conquered alone. United by their shared past and a vision for a safer future, they formed The Indoliya Guild. Their creed was simple: protect the weak, conquer the unknown, and rise from the shadows of a world plunged into chaos. They are more than a guild; they are a family, a promise, a shield against the darkness.",
  ],
  dungeons: [
    {
      name: 'The Sunken Temple of Azshara',
      rank: Rank.A_RANK,
      description: 'An ancient, water-logged temple complex guarded by Naga warriors and their hydra pets. The guild drained the central chamber to defeat the Serpent Lord and retrieve the Tidebreaker Locket.',
    },
    {
      name: 'The Cinder-Peak Volcano',
      rank: Rank.S_RANK,
      description: 'A treacherous, active volcano inhabited by fire elementals and magma dragons. The extreme heat required specialized mana-infused gear. Anurag defeated the primordial Ignis Dragon by turning its own flames against it.',
    },
    {
      name: 'The Ever-Shifting Labyrinth',
      rank: Rank.B_RANK,
      description: 'A maddening dungeon with no fixed map. Its walls and corridors would rearrange themselves at random intervals. Ankit\'s exceptional perception was key to navigating its illusions and finding the Minotaur at its heart.',
    },
     {
      name: 'The Frost-Veil Glacier',
      rank: Rank.A_RANK,
      description: 'A colossal glacier where the cold itself is a weapon. Inhabited by ice wraiths and frost giants, its core held a shard of eternal winter. Dharmendra\'s resilience was tested to its absolute limit against the Ice Giant Jarl.',
    },
  ],
  artifacts: [
    {
      name: 'Aegis of the Iron Fortress',
      icon: 'M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z',
      description: 'Dharmendra\'s shield, recovered from the heart of a golem king. It can absorb the kinetic energy of any blow and release it in a devastating shockwave.',
    },
    {
      name: 'Whisperwind Daggers',
      icon: 'M5 3l4 4L13 3l-4 4-4-4zm0 6l4 4 4-4-4 4-4-4zm0 6l4 4 4-4-4 4-4-4z',
      description: 'A pair of daggers found in a wind spirit\'s tomb. They are completely silent and allow Anuj to create localized vacuums for swift, noiseless takedowns.',
    },
    {
        name: 'Tidebreaker Locket',
        icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
        description: 'An amulet recovered from the Sunken Temple. It allows Anjali to manipulate water, granting her the ability to heal with blessed tides and shield allies with barriers of pure water.',
    },
    {
      name: 'Grimoire of the Infinite',
      icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v2H6.5A2.5 2.5 0 0 1 4 4.5v15z',
      description: 'Anurag\'s spellbook, which seems to write its own pages. It contains forbidden and primordial magic, but understanding its script risks the user\'s sanity.',
    },
  ],
};
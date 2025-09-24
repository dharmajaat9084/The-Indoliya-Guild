import { CharacterClass, Rank } from '../types';

export const classColors: Record<CharacterClass | Rank, { gradient?: string; text: string; shadow: string; glowColor: string; gem?: string; }> = {
    // Character Classes
    [CharacterClass.MONARCH]: { gradient: 'from-purple-500 to-indigo-600', text: 'text-purple-200', shadow: 'shadow-purple-500/50', glowColor: '#a855f7' },
    [CharacterClass.ASSASSIN]: { gradient: 'from-slate-600 to-gray-800', text: 'text-slate-200', shadow: 'shadow-slate-500/50', glowColor: '#71717a' },
    [CharacterClass.MAGE]: { gradient: 'from-blue-500 to-cyan-600', text: 'text-blue-200', shadow: 'shadow-blue-500/50', glowColor: '#3b82f6' },
    [CharacterClass.HEALER]: { gradient: 'from-green-500 to-emerald-600', text: 'text-green-200', shadow: 'shadow-green-500/50', glowColor: '#22c55e' },
    [CharacterClass.TANK]: { gradient: 'from-orange-500 to-amber-600', text: 'text-orange-200', shadow: 'shadow-orange-500/50', glowColor: '#f97316' },
    [CharacterClass.RANGER]: { gradient: 'from-teal-500 to-cyan-600', text: 'text-teal-200', shadow: 'shadow-teal-500/50', glowColor: '#14b8a6' },
    [CharacterClass.FIGHTER]: { gradient: 'from-red-600 to-rose-700', text: 'text-red-200', shadow: 'shadow-red-500/50', glowColor: '#e11d48' },
    [CharacterClass.SUMMONER]: { gradient: 'from-indigo-500 to-violet-600', text: 'text-indigo-200', shadow: 'shadow-indigo-500/50', glowColor: '#6d28d9' },

    // Ranks
    [Rank.S_RANK]: { text: 'text-purple-300', shadow: '0 0 15px #c084fc', gem: 'bg-purple-500', glowColor: '#c084fc' },
    [Rank.A_RANK]: { text: 'text-red-400', shadow: '0 0 10px #f87171', gem: 'bg-red-500', glowColor: '#f87171' },
    [Rank.B_RANK]: { text: 'text-blue-400', shadow: '0 0 8px #60a5fa', gem: 'bg-blue-500', glowColor: '#60a5fa' },
    [Rank.C_RANK]: { text: 'text-green-400', shadow: '0 0 6px #4ade80', gem: 'bg-green-500', glowColor: '#4ade80' },
};

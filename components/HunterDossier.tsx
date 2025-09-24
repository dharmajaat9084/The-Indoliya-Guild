import React, { useEffect, useState } from 'react';
import { Rank, type GeneratedCharacter } from '../types';
import { classColors } from './shared';

interface HunterDossierProps {
  character: GeneratedCharacter;
  onClose: () => void;
  onSpeak: (character: GeneratedCharacter) => void;
}

const StatBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
    <div className="flex items-center gap-4 my-2">
        <span className="w-24 font-mono text-sm text-gray-400 capitalize">{label}</span>
        <div className="flex-grow bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
            <div 
                className="stat-bar-animate h-2.5 rounded-full" 
                style={{ '--stat-percent': `${value}%`, backgroundColor: color, boxShadow: `0 0 8px ${color}` } as React.CSSProperties}
            ></div>
        </div>
        <span className="w-12 text-right font-mono text-sm text-gray-200">{value}</span>
    </div>
);


const HunterDossier: React.FC<HunterDossierProps> = ({ character, onClose, onSpeak }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // match animation duration
    };

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const { name, alias, class: charClass, rank, imageUrl, quote, backstory, stats, skills, title } = character;
    const color = classColors[charClass];
    const rankColor = classColors[rank];

    const getStatColor = (value: number) => {
        if (value >= 90) return classColors[Rank.S_RANK].glowColor;
        if (value >= 75) return classColors[Rank.A_RANK].glowColor;
        if (value >= 60) return classColors[Rank.B_RANK].glowColor;
        return classColors[Rank.C_RANK].glowColor;
    };

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            style={{ animation: 'dossier-fade-in 0.3s ease-out forwards' }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="hunter-name"
        >
            <div
                className={`bg-slate-900/80 border border-indigo-500/30 rounded-lg shadow-2xl shadow-indigo-500/20 w-full max-w-4xl max-h-[90vh] flex flex-col relative transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
                style={{'--glow-color': color.glowColor, animation: 'dossier-content-slide-in 0.3s ease-out forwards'} as React.CSSProperties}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <button 
                    onClick={handleClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20"
                    aria-label="Close dossier"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="overflow-y-auto p-6 sm:p-8 min-h-0">
                    {/* Image */}
                    <div className="w-full max-h-[50vh] mb-6">
                         <img src={imageUrl} alt={`Full portrait of ${name}`} className="w-full h-full object-contain rounded-lg"/>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-6">
                        <header>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 id="hunter-name" className="text-3xl md:text-4xl font-bold text-gray-100">{name}</h1>
                                    {alias && <p className="text-indigo-400 font-semibold text-lg">aka {alias}</p>}
                                </div>
                                <div className='text-center flex-shrink-0 ml-4'>
                                    <div 
                                        className={`w-8 h-8 mx-auto rounded-md ${rankColor.gem} border-2 border-white/50`}
                                        style={{ boxShadow: rankColor.shadow }}
                                    />
                                    <p className='font-bold mt-1 text-lg' style={{ color: rankColor.text, textShadow: rankColor.shadow }}>{rank}</p>

                                </div>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-xl font-bold" style={{ color: '#a5b4fc', textShadow: '0 0 10px rgba(165, 180, 252, 0.6)'}}>{title}</h2>
                                <span 
                                    className={`px-3 py-1 mt-2 inline-block text-xs font-bold rounded-full self-start bg-gradient-to-br ${color.gradient} ${color.text} ${color.shadow} shadow-lg`}
                                >
                                    {charClass}
                                </span>
                            </div>
                        </header>

                        <div className="border-t border-indigo-800/30"></div>

                        {/* Quote */}
                        <div className="bg-slate-800/50 p-4 rounded-lg flex items-center gap-4">
                           <p className="text-gray-300 italic text-center flex-grow">"{quote}"</p>
                           <button 
                                onClick={() => onSpeak(character)}
                                className="p-2 rounded-full text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-colors"
                                aria-label="Speak quote"
                           >
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M20 4a9 9 0 010 16M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                           </button>
                        </div>
                        
                        {/* Backstory */}
                        <div>
                           <h3 className="text-xl font-semibold text-indigo-300 mb-2 font-mono tracking-wider">LOG</h3>
                           <p className="text-gray-300 leading-relaxed text-justify">{backstory}</p>
                        </div>

                        {/* Stats */}
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-300 mb-2 font-mono tracking-wider">STATS</h3>
                            {Object.entries(stats).map(([key, value]) => (
                                <StatBar key={key} label={key} value={value} color={getStatColor(value)} />
                            ))}
                        </div>

                        {/* Skills */}
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-300 mb-3 font-mono tracking-wider">SKILLS</h3>
                            <div className="space-y-4">
                                {skills.map(skill => (
                                    <div key={skill.name} className="bg-slate-800/50 p-4 rounded-lg">
                                        <h4 className="font-bold text-lg text-gray-100">{skill.name}</h4>
                                        <p className="text-gray-400 mt-1">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HunterDossier;
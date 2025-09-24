import React, { useEffect, useState } from 'react';
import type { GuildLore } from '../types';
import { classColors } from './shared';

interface GuildArchivesProps {
  lore: GuildLore;
  onClose: () => void;
}

const GuildArchives: React.FC<GuildArchivesProps> = ({ lore, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300); // match animation duration
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            style={{ animation: 'dossier-fade-in 0.3s ease-out forwards' }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="archives-title"
        >
            <div
                className={`bg-slate-900/80 border border-indigo-500/30 rounded-lg shadow-2xl shadow-indigo-500/20 w-full max-w-4xl max-h-[90vh] flex flex-col relative transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
                style={{ animation: 'dossier-content-slide-in 0.3s ease-out forwards'}}
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-6 border-b border-indigo-500/20 text-center relative">
                    <h1 id="archives-title" className="text-3xl font-bold text-gray-100 title-glow-animation">Guild Archives</h1>
                    <p className="text-gray-400 mt-1">Records of The Indoliya Guild</p>
                    <button 
                        onClick={handleClose} 
                        className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500 hover:text-white transition-colors z-20"
                        aria-label="Close archives"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </header>

                <div className="overflow-y-auto p-6 sm:p-8 space-y-10 smooth-scroll">
                    {/* Founding History */}
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-3 font-mono tracking-wider border-b-2 border-indigo-500/30 pb-2">Founding History</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                            {lore.foundingHistory.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    {/* Dungeon Logs */}
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-4 font-mono tracking-wider border-b-2 border-indigo-500/30 pb-2">Dungeon Logs</h2>
                        <div className="space-y-4">
                            {lore.dungeons.map(dungeon => {
                                const rankColor = classColors[dungeon.rank];
                                return (
                                    <div key={dungeon.name} className="bg-slate-800/50 p-4 rounded-lg border-l-4" style={{borderColor: rankColor.glowColor}}>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-xl text-gray-100">{dungeon.name}</h3>
                                            <span className='font-bold' style={{ color: rankColor.text, textShadow: rankColor.shadow }}>{dungeon.rank}</span>
                                        </div>
                                        <p className="text-gray-400 mt-2">{dungeon.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                    
                    {/* Artifacts Recovered */}
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-300 mb-4 font-mono tracking-wider border-b-2 border-indigo-500/30 pb-2">Artifacts Recovered</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {lore.artifacts.map(artifact => (
                                <div key={artifact.name} className="bg-slate-800/50 p-4 rounded-lg flex items-center gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-indigo-900/50 border border-indigo-700 text-indigo-300">
                                         <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={artifact.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-100">{artifact.name}</h4>
                                        <p className="text-gray-400 mt-1 text-sm">{artifact.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default GuildArchives;
import React, { useState, useEffect, useRef } from 'react';
import { SIBLINGS } from './constants';
import type { GeneratedCharacter } from './types';
import SiblingCard from './components/SiblingCard';
import HunterDossier from './components/HunterDossier';
import GuildArchives from './components/GuildArchives';
import { GUILD_LORE } from './lore';

// A simple component for the particle background effect
const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('particle-container');
    if (!container || container.children.length > 0) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      container.appendChild(particle);
    }
  }, []);

  return <div id="particle-container"></div>;
};


const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedHunter, setSelectedHunter] = useState<GeneratedCharacter | null>(null);
  const [isArchivesOpen, setIsArchivesOpen] = useState(false);
  
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const awakeningSoundRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const modalOpenSoundRef = useRef<HTMLAudioElement | null>(null);
  const modalCloseSoundRef = useRef<HTMLAudioElement | null>(null);

  const [subtitle, setSubtitle] = useState('');
  const [typingFinished, setTypingFinished] = useState(false);
  const fullSubtitle = '[ System Alert: Hunters Awakened ]';

  useEffect(() => {
    bgMusicRef.current = document.getElementById('background-music') as HTMLAudioElement;
    awakeningSoundRef.current = document.getElementById('awakening-sound') as HTMLAudioElement;
    hoverSoundRef.current = document.getElementById('hover-sound') as HTMLAudioElement;
    modalOpenSoundRef.current = document.getElementById('modal-open-sound') as HTMLAudioElement;
    modalCloseSoundRef.current = document.getElementById('modal-close-sound') as HTMLAudioElement;

    if (bgMusicRef.current) bgMusicRef.current.volume = 0.1;
    if (awakeningSoundRef.current) awakeningSoundRef.current.volume = 0.4;
    if (hoverSoundRef.current) hoverSoundRef.current.volume = 0.2;
    if (modalOpenSoundRef.current) modalOpenSoundRef.current.volume = 0.3;
    if (modalCloseSoundRef.current) modalCloseSoundRef.current.volume = 0.3;
    
    const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        if (availableVoices.length > 0) setVoices(availableVoices);
    };
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }, []);

  useEffect(() => {
    if (userInteracted) {
      if (isMuted) bgMusicRef.current?.pause();
      else bgMusicRef.current?.play().catch(e => console.log("Browser prevented audio playback."));
    }
  }, [isMuted, userInteracted]);
  
  const handleInitialInteraction = () => {
    if (!userInteracted) {
        setUserInteracted(true);
        if(!isMuted) {
            awakeningSoundRef.current?.play().catch(e => console.log("Browser prevented awakening sound."));
        }
    }
  };

  const playHoverSound = () => {
    if (!isMuted && hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play();
    }
  };
  
  const speakQuote = (character: GeneratedCharacter) => {
    if (isMuted || !('speechSynthesis' in window) || !character.quote) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(character.quote);
    
    const isFemale = character.name.includes('Anjali');
    let selectedVoice: SpeechSynthesisVoice | undefined;

    if (isFemale) {
        const femaleVoices = voices.filter(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('susan')));
        selectedVoice = femaleVoices[0];
        utterance.pitch = 1.1;
        utterance.rate = 0.85;
    } else {
        const maleVoices = voices.filter(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('google')));
        if (maleVoices.length > 0) {
            selectedVoice = maleVoices[(character.id - 1) % maleVoices.length];
        }
        utterance.pitch = 0.8 - ((character.id % 3) * 0.1);
        utterance.rate = 0.8;
    }
    
    utterance.voice = selectedVoice || voices.find(v => v.lang.startsWith('en')) || null;
    utterance.lang = 'en-US';
    
    window.speechSynthesis.speak(utterance);
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!userInteracted) setUserInteracted(true);
    setIsMuted(!isMuted);
    window.speechSynthesis.cancel();
  };

  const handleCardClick = (character: GeneratedCharacter) => {
    setSelectedHunter(character);
    if (!isMuted) modalOpenSoundRef.current?.play();
  };
  
  const handleDossierClose = () => {
    setSelectedHunter(null);
    if (!isMuted) modalCloseSoundRef.current?.play();
  };

  const handleArchivesOpen = () => {
    setIsArchivesOpen(true);
    if (!isMuted) modalOpenSoundRef.current?.play();
  }

  const handleArchivesClose = () => {
    setIsArchivesOpen(false);
    if (!isMuted) modalCloseSoundRef.current?.play();
  }

  useEffect(() => {
    setTypingFinished(false);
    let i = 0;
    const typingInterval = setInterval(() => {
        setSubtitle(fullSubtitle.substring(0, i + 1));
        i++;
        if (i === fullSubtitle.length) {
            clearInterval(typingInterval);
            setTypingFinished(true);
        }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);


  return (
    <div onClick={handleInitialInteraction} className="cursor-default">
      <ParticleBackground />
      <div className="min-h-screen p-4 sm:p-8 relative">
        <main className="container mx-auto">
          <header className="text-center mb-12 relative">
             <div className="absolute top-0 right-0 flex gap-2 z-20">
                <button 
                    onClick={handleArchivesOpen}
                    className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Open Guild Archives"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </button>
                <button 
                    onClick={handleMuteToggle} 
                    className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l-4-4m0 4l4-4" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M20 4a9 9 0 010 16M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                    )}
                </button>
            </div>
            <div className="flex justify-center items-center gap-4">
                <svg className="h-14 w-14 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z"></path>
                    <path d="M12 22V12l8-4"></path><path d="M12 12L4 8"></path>
                    <path d="M12 12v10"></path><path d="M4 5l8 3 8-3"></path>
                </svg>
                <h1 className="text-4xl md:text-6xl font-bold uppercase title-glow-animation">
                The Indoliya Guild
                </h1>
            </div>
            <p className="text-gray-400 mt-2 text-sm italic">"From Shadow, We Rise"</p>
            <p className="text-indigo-300 mt-4 text-lg h-7 font-mono">{subtitle}{!typingFinished && <span className="animate-ping">_</span>}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIBLINGS.map((char, index) => (
              <SiblingCard 
                key={char.id} 
                character={char} 
                animationDelay={index * 100} 
                onHover={playHoverSound}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </main>
      </div>
      {selectedHunter && (
        <HunterDossier 
          character={selectedHunter} 
          onClose={handleDossierClose}
          onSpeak={speakQuote}
        />
      )}
       {isArchivesOpen && (
        <GuildArchives 
          lore={GUILD_LORE} 
          onClose={handleArchivesClose} 
        />
      )}
    </div>
  );
};

export default App;
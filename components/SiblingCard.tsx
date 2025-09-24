import React, { useRef, useState } from 'react';
import type { GeneratedCharacter } from '../types';
import { classColors } from './shared';

interface SiblingCardProps {
    character: GeneratedCharacter;
    animationDelay: number;
    onHover: () => void;
    onCardClick: (character: GeneratedCharacter) => void;
}

const SiblingCard: React.FC<SiblingCardProps> = ({ character, animationDelay, onHover, onCardClick }) => {
  const { name, alias, title, description, class: charClass, rank, imageUrl } = character;
  
  const color = classColors[charClass];
  const rankColor = classColors[rank];

  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20; // less extreme tilt
    const y = (clientY - top - height / 2) / 20 * -1;
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  return (
    <div
      className="card-wrapper card-animate"
      style={{
        animationDelay: `${animationDelay}ms`,
        '--glow-color': color.glowColor,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => onCardClick(character)}
    >
      <div ref={cardRef} className="card-content rounded-lg overflow-hidden w-full h-full flex flex-col cursor-pointer">
        <div className="aspect-[3/4] w-full relative bg-gray-900/50 overflow-hidden">
            <img src={imageUrl} alt={`Portrait of ${name}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)'}} />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#101021] via-[#101021]/70 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="flex justify-between items-end">
                    <div className='max-w-[70%]'>
                      <h2 className="text-2xl font-bold text-gray-100 drop-shadow-lg">{name}</h2>
                      {alias && <p className="text-indigo-400 font-semibold">aka {alias}</p>}
                    </div>
                    {rank && (
                        <div className='text-center'>
                            <div 
                                className={`w-6 h-6 mx-auto rounded-sm ${rankColor.gem} border-2 border-white/50`}
                                style={{ boxShadow: rankColor.shadow }}
                            />
                            <p className='font-bold mt-1' style={{ color: rankColor.text, textShadow: rankColor.shadow }}>{rank}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="p-4 flex-grow flex flex-col">
            {charClass && (
              <span 
                className={`px-3 py-1 text-xs font-bold rounded-full self-start bg-gradient-to-br ${color.gradient} ${color.text} ${color.shadow} shadow-lg`}
              >
                {charClass}
              </span>
            )}

            <div className="my-3 border-t border-indigo-800/30"></div>

            {title ? (
              <>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: '#a5b4fc', textShadow: '0 0 10px rgba(165, 180, 252, 0.6)'}}
                >
                  {title}
                </h3>
                <p className="text-gray-400 mt-1 italic text-sm">"{description}"</p>
              </>
            ) : (
              <p className="text-gray-500 italic">Stats are still being calculated...</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default SiblingCard;
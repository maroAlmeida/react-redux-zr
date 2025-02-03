import { useState } from 'react';
import { Tournament, Match } from '../services/types';

interface AccordionProps {
  tournament: Tournament;
  onMatchSelect: (match: Match) => void;
  selectedMatchId: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ tournament, onMatchSelect, selectedMatchId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className={`w-full text-left text-xl py-4 px-6 focus:outline-none ${isOpen ? 'bg-[#39a00b] text-white' : 'bg-gray-100 hover:bg-blue-500'}`}
      >
        <span className="text-sm font-semibold">{tournament.name}</span>
      </button>
      {isOpen && (
        <div className="pl-6">
          {tournament.matches.map(match => (
            <button
              key={match.id}
              onClick={() => onMatchSelect(match)}
              className={`w-full text-left py-2 px-4 text-xs focus:outline-none ${selectedMatchId === match.id ? 'bg-[#39a00b] text-white' : 'bg-white hover:bg-gray-100' } `}
            >
              {match.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
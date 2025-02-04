"use client";

import { Tournament, Match } from '../services/types';

interface AccordionProps {
  tournament: Tournament;
  onMatchSelect: (match: Match) => void;
  onTournamentSelect: (tournamentId: number) => void;
  selectedMatchId: string | null;
  isActive: boolean;
}

const Accordion = ({ tournament, onMatchSelect, onTournamentSelect, selectedMatchId, isActive }: AccordionProps) => {
  return (
    <div className="accordion-item">
      <div
        className="accordion-title bg-gray-200 p-2 cursor-pointer"
        onClick={() => onTournamentSelect(tournament.id)}
      >
        {tournament.name}
      </div>
      {isActive && (
        <div className="accordion-content">
          {tournament.matches.map((match) => (
            <div
              key={match.id}
              className={`match-item p-2 cursor-pointer ${selectedMatchId === String(match.id) ? 'bg-blue-200' : ''}`}
              onClick={() => onMatchSelect(match)}
            >
              {match.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
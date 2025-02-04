import { useState, useEffect, useCallback } from 'react';
import { Tournament, Match } from '../services/types';
import { fetchTournaments } from '../services/api';

export const useAccordion = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [activeTournamentId, setActiveTournamentId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleTournamentUpdate = useCallback((updatedTournaments: Tournament[]) => {
    setTournaments(updatedTournaments);
  }, []);

  const handleMatchSelect = (match: Match) => {
    setSelectedMatch(match);
  };

  const handleTournamentSelect = (tournamentId: number) => {
    setActiveTournamentId(tournamentId);
    setSelectedMatch(null);
  };

  useEffect(() => {
    const getTournaments = async () => {
      try {
        const data = await fetchTournaments();
        handleTournamentUpdate(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    getTournaments();
  }, [handleTournamentUpdate]);

  return {
    tournaments,
    selectedMatch,
    activeTournamentId,
    loading,
    error,
    handleMatchSelect,
    handleTournamentSelect,
  };
};
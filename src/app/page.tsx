"use client";
import style from './page.module.scss';
import ThemeToggler from '../components/ThemeToggler';
import Accordion from '../components/Accordion';
import { useAccordion } from '../hooks/useAccordion';

export default function Home() {
  const {
    tournaments,
    selectedMatch,
    activeTournamentId,
    loading,
    error,
    handleMatchSelect,
    handleTournamentSelect,
  } = useAccordion();

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-full grid bg-gray-100">
        <div className="w-full flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
            {/* Row bet panel */}
            <div className='w-full py-4'>
              <div className="grid grid-cols-[1fr_50%_1fr] gap-4">
                {/* Primeira coluna com o accordion */}
                <div className="col-span-1 border border-gray-600">
                  <div className={`w-full bg-blue-500 p-2 ${style.pannelTitle}`}>
                    <p className='text-white font-semibold py-2'>Sports and Matches list</p>
                  </div>
                  <div>
                    {tournaments.map(tournament => (
                      <Accordion
                        key={tournament.id}
                        tournament={tournament}
                        onMatchSelect={handleMatchSelect}
                        onTournamentSelect={handleTournamentSelect}
                        selectedMatchId={selectedMatch ? String(selectedMatch.id) : null}
                        isActive={activeTournamentId === tournament.id}
                      />
                    ))}
                  </div>
                </div>

                {/* Segunda coluna */}
                <div className="col-span-1 border border-red-600">
                  <div className={`w-full bg-blue-500 p-2 ${style.pannelTitle}`}>
                    <p className='text-white font-semibold py-2'>Market and its Odds panel</p>
                  </div>
                  <div className='p-2'>
                    {selectedMatch && (
                      <div className="mt-4">
                        <h2 className="text-lg font-semibold">{selectedMatch.name}</h2>
                        <p>Home Team: {selectedMatch.home.name}</p>
                        <p>Away Team: {selectedMatch.away.name}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Terceira coluna */}
                <div className="col-span-1 border border-gray-600">
                  <div className={`w-full bg-blue-500 p-2 ${style.pannelTitle}`}>
                    <p className='text-white font-semibold py-2'>Bet summary</p>
                  </div>
                  <div className='p-2'>
                    <p>Bet summary</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Row bet panel */}
          </div>
        </div>
        <div className='w-full p-6'>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
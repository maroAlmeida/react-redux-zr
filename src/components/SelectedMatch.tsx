"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { loadMarkets } from '@/store/matchSlice';

const SelectedMatch: React.FC<{ onSelectOutcome: (outcome: { name: string; id: number; odds: number }) => void }> = ({ onSelectOutcome }) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedMatch = useSelector((state: RootState) => state.match.selectedMatch);
  const markets = useSelector((state: RootState) => state.match.markets);

  React.useEffect(() => {
    if (selectedMatch) {
      dispatch(loadMarkets(selectedMatch.id));
    }
  }, [dispatch, selectedMatch]);

  if (!selectedMatch) return <div className="mt-4 text-gray-500">Nenhum jogo selecionado</div>;

  return (
    <div className="mt-4 p-4 bg-blue-100 text-blue-900 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{selectedMatch.name}</h2>
      <p>Home Team: {selectedMatch.home.name}</p>
      <p>Away Team: {selectedMatch.away.name}</p>

      <h3 className="mt-3 text-md font-semibold">Odds</h3>
      <div className="flex gap-4">
        {markets.map((market) => (
          <button
            key={market.id}
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => onSelectOutcome(market)}
          >
            {market.name}: {market.odds}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectedMatch;

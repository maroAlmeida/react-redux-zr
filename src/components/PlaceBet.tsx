"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { placeBetThunk } from '@/store/matchSlice';
import SelectedMatch from './SelectedMatch';

const PlaceBet: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedMatch = useSelector((state: RootState) => state.match.selectedMatch);
    const [betAmount, setBetAmount] = useState<number>(0);
    const [selectedOutcome, setSelectedOutcome] = useState<{ name: string; id: number; odds: number } | null>(null);

    const handleSubmit = async () => {
        if (!selectedMatch || !selectedOutcome) return;

        const betData = {
            bet: betAmount,
            marketId: 1,
            matchId: selectedMatch.id,
            outcome: selectedOutcome,
        }

        console.log('betData: ' + betData);

        dispatch(placeBetThunk(betData));
    }

    return (
        <div className='mt-4 p-4 bg-gray-100 rounded-lg' >
            <h2 className='text-lg font-semibold' >Realizar aposta</h2>

            <SelectedMatch onSelectOutcome={setSelectedOutcome} /> {/* Agora atualiza automaticamente */}

            <input
                type="number" value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className='border p-2 mt-2 w-full'
                placeholder='Valor da aposta'
            />

            {selectedOutcome && (
                <div className="mt-2 p-2 bg-green-100 rounded">
                    <p>Aposta: <strong>{selectedOutcome.name}</strong> | Odds: {selectedOutcome.odds}</p>
                </div>
            )}

            <button
                onClick={handleSubmit}
                className="mt-2 bg-blue-500 text-white p-2 rounded"
                disabled={!selectedOutcome}
            >
                Apostar
            </button>
        </div>

    )

};

export default PlaceBet;
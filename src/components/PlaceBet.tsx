"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { placeBet } from '@/services/api';

interface BetData {
    bet: betAmount,
    marketId: 1,
    matchId: selectedMatch.id,
    outcomeId: {
        name: selectedMatch.name,
        id: outcomeId,
        odds: 2.5
    };
};

const PlaceBet: React.FC = () => {

    const selectedMatch = useSelector((state: RootState) => state.match.selectedMatch );
    const [betAmount, setBetAmount] = useState<number>(0);
    const [outcomeId] = useState<number | null>(null);

    const handleSumit = async () => {
        if(!selectedMatch || outcomeId === null) return;

        const betData: BetData = {
            bet: betAmount,
            marketId: 1,
            matchId: selectedMatch.id,
            outcomeId: {
                name: selectedMatch.name,
                id: outcomeId,
                odds: 2.5
            },
        }

        try{
            await placeBet(betData);
            alert("Aposta realizada com sucesso!");
        }catch (error) {
            console.error("Erro ao realizar aposta:", error); // Agora o erro é usado
            alert("Erro ao realizar aposta");
        }
    }

    return(
        <div className='mt-4 p-4 bg-gray-100 rounded-lg' >
            <h2 className='text-lg font-semibold' >Realizar aposta</h2>
            <input 
                type="number" value={betAmount}
                onChange={(e) => setBetAmount(Number(e.target.value))}
                className='border p-2 mt-2 w-full'
                placeholder='VValor da aposta'
            />

            <button 
                className='p-2 mt-2 bg-blue-500 text-white rounded'
                onClick={handleSumit} 
            >Apostar</button>
        </div>

    )

};

export default PlaceBet;
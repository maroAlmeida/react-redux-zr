"use client";

import React, { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { loadTournaments } from '@/store/matchSlice';
import { RootState, AppDispatch } from '@/store/store';
import AccordionItem from './AccordionItem';

const SportsAccordion: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tournaments = useSelector( (state: RootState) => state.match.tournaments );

    useEffect(() => {
        dispatch(loadTournaments());
    }, [dispatch] );
    console.log("SportsAccordion Torneios carregados:", tournaments);

    return(
        <div>
            {tournaments.map( (tournament, index) => (
                <div key={`${tournament.id}-${index}`} className="mb-4"> {/* 🔹 Mesmo que API forneça id duplicado, forçamos para key ser única */}
                    <h2 className='text-xl font-semi-bold'  >{tournament.name}</h2>
                    {tournament.matches.map((match) => (
                        <AccordionItem key={match.id} match={match} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SportsAccordion;
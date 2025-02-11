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

    return(
        <div>
            {tournaments.map( (tournament) => (
                <div key={tournament.id} className='mb-4' >
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
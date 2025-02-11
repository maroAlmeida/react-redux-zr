
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import AccordionItem from './AccordionItem';

const SportsAccordion: React.FC = () => {
    const sports = useSelector( (state: RootState) => state.match.sports );

    return(
        <div>
            {sports.map( (sport) => (
                <div key={sport.id} className='mb-4' >
                    <h2 className='text-xl font-semi-bold'  >{sport.name}</h2>
                    {sport.matches.map((match) => (
                        <AccordionItem key={match.id} match={match} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SportsAccordion;
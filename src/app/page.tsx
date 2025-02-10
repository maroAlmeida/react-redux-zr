"use client";

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadSports } from '../store/matchSlice';
import { RootState, AppDispatch } from '../store/store';
import AccordionItem from '../components/AccordionItem';
import SelectedMatch from '../components/SelectedMatch';
import { useDispatch as useReduxDispatch } from 'react-redux';


const Page: React.FC = () => {
  const dispatch = useReduxDispatch<AppDispatch>(); // Dispatch tipado corretamente
  const sports = useSelector((state: RootState) => state.match.sports);

  useEffect(() => {
    dispatch(loadSports()); // Carrega os esportes na montagem
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sports Matches</h1>
      {sports.map((sport) => (
        <div key={sport.id} className="mb-4">
          <h2 className="text-xl font-semibold">{sport.name}</h2>
          {sport.matches.map((match) => (
            <AccordionItem key={match.id} match={match} />
          ))}
        </div>
      ))}
      <SelectedMatch />
    </div>
  );
};

export default Page;
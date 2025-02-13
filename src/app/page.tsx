"use client";

import React, { useEffect } from 'react';
import { useDispatch as useReduxDispatch } from 'react-redux';
import { loadTournaments } from '@/store/matchSlice';
import { AppDispatch } from '../store/store';
import SportsAccordion from '@/components/SportsAccordion';
import SelectedMatch from '../components/SelectedMatch';
import PlaceBet from '@/components/PlaceBet';

const Page: React.FC = () => {
  const dispatch = useReduxDispatch<AppDispatch>(); // Dispatch tipado corretamente

  useEffect(() => {
    dispatch(loadTournaments()); // Carrega os esportes na montagem
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sports Matches</h1>
      <div className='grid grid-cols-3 gap-3' >
        <div className='border-2 border-indigo-600' >
          <SportsAccordion />
        </div>
        <div className='border-2 border-indigo-600'>
          <SelectedMatch />
        </div>
        <div className='border-2 border-indigo-600' >
        <PlaceBet />
        </div>
      </div>
    </div>
  );
};

export default Page;
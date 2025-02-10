"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const SelectedMatch: React.FC = () => {
  const selectedMatch = useSelector((state: RootState) => state.match.selectedMatch);
  return (
    selectedMatch && (
      <div className="mt-4 p-4 bg-blue-100 text-blue-900 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{selectedMatch.name}</h2>
        <p>Home Team: {selectedMatch.home.name}</p>
        <p>Away Team: {selectedMatch.away.name}</p>
      </div>
    )
  );
};

export default SelectedMatch;
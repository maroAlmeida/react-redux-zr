"use client";

import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMatch } from '@/store/matchSlice';
import { Match } from '@/services/types';

interface AccordionItemProps {
  match: Match;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ match }) => {
  const dispatch = useDispatch();
  return (
    <div 
      className="cursor-pointer p-2 border-b border-gray-300 hover:bg-gray-200" 
      onClick={() => dispatch(selectMatch(match))}
    >
      {match.name}
    </div>
  );
};

export default AccordionItem;

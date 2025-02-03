import { Tournament } from './types';
// const API_URL = 'https://fe-challenge-seven.vercel.app/api/tournaments';
const API_URL = './sports.json';

export const fetchTournaments = async (): Promise<Tournament[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch tournaments');
    }
    const data: Tournament[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    throw error;
  }
};
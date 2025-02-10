// import { Tournament } from './types';
// const API_URL = 'https://fe-challenge-seven.vercel.app/api/tournaments';
// const API_URL = './sports.json';

export const fetchSportsData = async () => {
  const response = await fetch('/sports.json'); // Caminho para o arquivo
  if (!response.ok) {
    throw new Error('Erro ao carregar os dados dos esportes');
  }
  return response.json();
};



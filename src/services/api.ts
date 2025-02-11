
export const fetchTournaments = async () => {
  const response = await fetch('https://fe-challenge-seven.vercel.app/api/tournaments');
  if (!response.ok) {
    throw new Error('Erro ao buscar torneios');
  }
  return response.json();
}

export const fetchMarkets = async (matchId: number) => {
  const response = await fetch(`https://fe-challenge-seven.vercel.app/api/markets/${matchId}`);
  if (!response.ok) throw new Error('Erro ao buscar mercados');
  return response.json();
}

export const placeBet = async (betData: {
  bet: number;
  marketId: number;
  matchId: number;
  outcome: {
    name: string;
    id: number;
    odds: number
  }
}) => {
  const response = await fetch('https://fe-challenge-seven.vercel.app/api/bet', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(betData),
  });
  if (!response.ok) throw new Error('Erro ao realizar aposta');
  return response.json();
}


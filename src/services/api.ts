
export const fetchSportsData = async () => {
  const response = await fetch('/sports.json'); // Caminho para o arquivo
  if (!response.ok) {
    throw new Error('Erro ao carregar os dados dos esportes');
  }
  return response.json();
};



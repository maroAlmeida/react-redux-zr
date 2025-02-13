import postmanCollection from "../../public/postman-collection.json";

// Função para extrair os endpoints do JSON do Postman
const getEndpoint = (name: string): string | undefined => {
  const item = postmanCollection.item.find((i) => i.name.includes(name));
  return item?.request.url.raw;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


// Se, no futuro, quisermos usar uma API real, basta mudar api.ts para buscar os dados da API sem modificar o resto do código.
// 📌 Quando isso acontecer, basta atualizar fetchTournaments para:
// export const fetchTournaments = async () => {
//   const response = await fetch("https://fe-challenge-seven.vercel.app/api/tournaments");
//   if (!response.ok) throw new Error("Erro ao carregar torneios");
//   return await response.json();
// };
// E o resto do código continuará funcionando sem precisar mudar Redux, componentes ou lógica do front-end! 🚀


// Simulação dinâmica baseada no JSON fornecido
export const fetchTournaments = async () => {
  await delay(500);
  const tournamentsItem = postmanCollection.item.find((i) => i.name.includes("Tournaments Menu"));

  if (!tournamentsItem || !tournamentsItem.response) {
    console.error("Torneios não encontrados ou resposta inválida no JSON do Postman");
    return [];
  }

  console.log("API Carregando torneios do JSON carregado:", tournamentsItem.response);
  return tournamentsItem.response;

  // Garantir que os dados retornados têm a estrutura esperada
  // return tournamentsItem.response.map((tournament: any) => ({
  //   id: tournament.id || Math.random(), // Garante um ID se não existir
  //   name: tournament.name || "Torneio Desconhecido",
  //   matches: tournament.matches || []
  // }));
};


export const fetchMarkets = async (matchId: number) => {
  await delay(500);
  const marketsItem = postmanCollection.item.find((i) => i.name.includes("Match Markets"));

  if (!marketsItem || !marketsItem.response) {
    console.error("Mercados não encontrados ou resposta inválida no JSON do Postman");
    return [];
  }

  console.log(`Carregando mercados do jogo ${matchId} do JSON mockado.`);

  // Garantir que os mercados tenham a estrutura esperada
  // return marketsItem.response.map((market: any) => ({
  //   id: market.id || Math.random(),
  //   name: market.name || "Mercado Desconhecido",
  //   odds: market.odds || 1.0
  // }));
  return marketsItem.response;

};


export const placeBet = async (betData: {
  bet: number;
  marketId: number;
  matchId: number;
  outcome: { name: string; id: number; odds: number };
}) => {
  await delay(500);
  const endpoint = getEndpoint("Place Bet");
  console.log("Enviando aposta para:", endpoint, "Dados:", betData);

  return { success: true, message: "Aposta realizada com sucesso!" };
};


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Considerações:

Os projeto utiliza Redux para controlar o estado global e segue os princípios SOLID:

✅ store/matchSlice.ts – Mantido, gerencia o estado global dos jogos.
✅ store/store.ts – Mantido, cria a store do Redux.
✅ components/AccordionItem.tsx – Mantido, atualizado para usar Redux.
✅ components/SelectedMatch.tsx – Mantido, atualizado para Redux.
✅ components/ReduxProvider.tsx – Mantido, garantindo o funcionamento do Redux.
✅ app/layout.tsx – Mantido, incluindo o ReduxProvider.
✅ app/page.tsx – Mantido, atualizado para refletir a nova estrutura.

Single Responsibility: Cada componente tem uma única função.
Open/Closed Principle: Componentes podem ser estendidos sem modificação direta.
Dependency Inversion: Componentes dependem de Redux (abstração), não diretamente de estado interno.

Atualmente, nosso projeto está estruturado assim:

✅ 1) Requisição HTTP GET para buscar torneios
fetchTournaments() em services/api.ts faz a chamada à API.
loadTournaments() em store/matchSlice.ts usa Redux Thunk para armazenar os torneios no estado global.
SportsAccordion.tsx exibe os torneios e suas partidas.

✅ 2) Requisição HTTP GET para buscar os jogos de um torneio
fetchMarkets(matchId) em services/api.ts busca mercados (dados do jogo) para um matchId.
loadMarkets(matchId) em store/matchSlice.ts armazena os mercados no Redux.
SelectedMatch.tsx exibe detalhes do jogo selecionado.

🚧 3) Implementação pendente: Requisição POST para enviar aposta (placeBet)
Precisamos criar interfaces e lógica para o usuário inserir os dados da aposta.
Criar um componente de formulário (PlaceBet.tsx).
Usar a função placeBet() para enviar os dados para a API.

📌 Desenvolvimento da Funcionalidade de Apostas
Agora, vamos mapear cada etapa do desenvolvimento da funcionalidade de apostas (POST /api/bet).

🔹 Fluxo Completo
1️⃣ Usuário seleciona um jogo (match) → SelectedMatch.tsx exibe os detalhes do jogo.
2️⃣ Usuário preenche valor da aposta e seleciona um resultado (outcome) → Criamos um formulário de apostas (PlaceBet.tsx).
3️⃣ Usuário clica em "Fazer Aposta" → O formulário chama placeBet().
4️⃣ O Redux armazena o status da aposta → Criamos placeBetThunk em matchSlice.ts para gerenciar o envio da aposta.
5️⃣ Se sucesso, exibimos mensagem → Se erro, mostramos um alerta.


📂 Arquitetura e Responsabilidades dos Arquivos
Aqui está um mapa dos arquivos envolvidos, com suas funções:

📁 services/api.ts
📌 Responsabilidade: Fazer chamadas HTTP para a API.
✅ Adicionamos a função placeBet() para enviar a aposta.

store/matchSlice.ts
📌 Responsabilidade: Gerenciar estado global dos torneios, jogos e apostas.
✅ Criamos placeBetThunk para gerenciar o envio da aposta.

✅ Resumo do Desenvolvimento
Agora temos todas as etapas da funcionalidade de apostas bem definidas!
🔹 services/api.ts → Função placeBet() para chamar a API.
🔹 store/matchSlice.ts → placeBetThunk para gerenciar o envio da aposta.
🔹 components/PlaceBet.tsx → Interface para o usuário inserir e enviar a aposta.
🔹 app/page.tsx → Adicionamos <PlaceBet /> para exibir o formulário na tela.
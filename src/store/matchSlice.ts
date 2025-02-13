import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTournaments, fetchMarkets, placeBet } from '@/services/api';
import { Tournament, Market, Match } from '@/services/types';

interface MatchState {
  tournaments: Tournament[];
  markets: Market[];
  selectedMatch: Match | null;
  betStatus: 'idle' | 'sucess' | 'error';
}

const initialState: MatchState = { tournaments: [], markets: [], selectedMatch: null, betStatus: 'idle' };


// Thunks para buscar dados da API
export const loadTournaments = createAsyncThunk('match/loadTournaments', async () => {
  return await fetchTournaments();
});

export const loadMarkets = createAsyncThunk('match/loadMarkets', async (matchId: number) => {
  return await fetchMarkets(matchId);
})

export const placeBetThunk = createAsyncThunk('match/placeBet', async (betData: { bet: number; marketId: number; matchId: number; outcome: { name: string; id: number; odds: number } }) => {
  return await placeBet(betData);
} )

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    selectMatch: (state, action: PayloadAction<Match>) => {
      state.selectedMatch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTournaments.fulfilled, (state, action) => {
      state.tournaments = action.payload;
    });
    builder.addCase(loadMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
    });
    builder.addCase(placeBetThunk.fulfilled, (state) => {
      state.betStatus = 'sucess';
    });
    builder.addCase(placeBetThunk.rejected, (state) => {
      state.betStatus = 'error';
    })
  },
});

export const { selectMatch } = matchSlice.actions;
export default matchSlice.reducer;
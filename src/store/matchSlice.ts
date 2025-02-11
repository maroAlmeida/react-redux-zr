import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTournaments, fetchMarkets } from '@/services/api';
import { Tournament, Market, Match } from '@/services/types';

interface MatchState {
  tournaments: Tournament[];
  markets: Market[];
  selectedMatch: Match | null;
}

const initialState: MatchState = { tournaments: [], markets: [], selectedMatch: null };


// Thunks para buscar dados da API
export const loadTournaments = createAsyncThunk('match/loadTournaments', async () => {
  return await fetchTournaments();
});

export const loadMarkets = createAsyncThunk('match/loadMarkets', async (matchId: number) => {
  return await fetchMarkets(matchId);
})

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
    })
  },
});

export const { selectMatch } = matchSlice.actions;
export default matchSlice.reducer;
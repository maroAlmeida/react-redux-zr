import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSportsData } from '../services/api';
import { Sport, Match } from '../services/types';

interface MatchState {
  sports: Sport[];
  selectedMatch: Match | null;
}

const initialState: MatchState = { sports: [], selectedMatch: null };

// Thunk para buscar os esportes do JSON
export const loadSports = createAsyncThunk('match/loadSports', async () => {
  return await fetchSportsData();
});

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    selectMatch: (state, action: PayloadAction<Match>) => {
      state.selectedMatch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSports.fulfilled, (state, action) => {
      state.sports = action.payload;
    });
  },
});

export const { selectMatch } = matchSlice.actions;
export default matchSlice.reducer;
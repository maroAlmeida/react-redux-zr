import { createSlice } from '@reduxjs/toolkit';

type ThemeState = {
  color: 'gray' | 'blue';
};

const initialState: ThemeState = {
  color: 'gray',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleColor: (state) => {
      state.color = state.color === 'gray' ? 'blue' : 'gray';
    },
  },
});

export const { toggleColor } = themeSlice.actions;
export default themeSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction, Action} from '@reduxjs/toolkit';

export interface CounterState {
  favFilms: string[];
}

const initialState: CounterState = {
  favFilms: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<string>) => {
      state.favFilms.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.favFilms = state.favFilms.filter(
        filmId => filmId !== action.payload,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addFav, removeFav} = counterSlice.actions;

export default counterSlice.reducer;

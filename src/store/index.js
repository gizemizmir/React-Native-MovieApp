import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

import darkTheme from '../constants/theme/dark';
import lightTheme from '../constants/theme/light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: lightTheme,
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme:
          state.activeTheme.type === 'light' ? darkTheme : lightTheme,
      };
    },
  },
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movieItems: [],
  },
  reducers: {
    setMovies: (state, action) => {
      const {movies} = action.payload;
      return {
        movieItems: movies,
      };
    },
  },
});
export const {toggleTheme} = themeSlice.actions;
export const {setMovies} = movieSlice.actions;

export const store = configureStore({
  reducer: combineReducers({
    theme: themeSlice.reducer,
    movies: movieSlice.reducer,
  }),
});

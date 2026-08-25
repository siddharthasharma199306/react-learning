import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type PokemonState = {
  selectedPokemon: string | null;
  favorites: string[];
};

const initialState: PokemonState = {
  selectedPokemon: null,
  favorites: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    selectPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemon = action.payload;
    },

    clearSelection: (state) => {
      state.selectedPokemon = null;
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const name = action.payload;

      if (state.favorites.includes(name)) {
        state.favorites = state.favorites.filter((pokemon) => pokemon !== name);
      } else {
        state.favorites.push(name);
      }
    },
  },
});

export const { selectPokemon, clearSelection } = pokemonSlice.actions;

export default pokemonSlice.reducer;

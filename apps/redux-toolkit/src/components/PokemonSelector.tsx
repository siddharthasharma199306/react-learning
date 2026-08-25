import { useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from '../app/store';

import {
  selectPokemon,
  clearSelection,
} from '../features/pokemon/pokemonSlice';

export function PokemonSelector() {
  const dispatch = useDispatch<AppDispatch>();

  const selectedPokemon = useSelector(
    (state: RootState) => state.pokemon.selectedPokemon,
  );

  return (
    <div>
      <p>Selected Pokémon: {selectedPokemon ?? 'None'}</p>

      <button onClick={() => dispatch(selectPokemon('pikachu'))}>
        Select Pikachu
      </button>

      <button onClick={() => dispatch(selectPokemon('charizard'))}>
        Select Charizard
      </button>

      <button onClick={() => dispatch(clearSelection())}>Clear</button>
    </div>
  );
}

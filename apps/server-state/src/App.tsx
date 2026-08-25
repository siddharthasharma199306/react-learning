import { useState } from 'react';
import { PokemonList } from './components/PokemonList';
import { PokemonDetails } from './components/PokemonDetails';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  return (
    <div>
      <PokemonList onSelect={setSelectedPokemon} />

      {selectedPokemon && <PokemonDetails name={selectedPokemon} />}
    </div>
  );
}

export default App;

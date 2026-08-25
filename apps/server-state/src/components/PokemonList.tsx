import { usePokemonList } from '../hooks/usePokemonList';

type PokemonListProps = {
  onSelect: (name: string) => void;
};

export function PokemonList({ onSelect }: PokemonListProps) {
  const { data, isPending, isError, error } = usePokemonList();

  if (isPending) return <p>Loading Pokémon...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Pokémon List</h2>

      {data.results.map((pokemon) => (
        <button
          key={pokemon.name}
          onClick={() => onSelect(pokemon.name)}
          style={{
            display: 'block',
            marginBottom: 8,
            padding: '8px 12px',
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

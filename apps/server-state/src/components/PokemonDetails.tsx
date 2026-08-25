import { usePokemon } from '../hooks/usePokemon';

type PokemonDetailsProps = {
  name: string;
};

export function PokemonDetails({ name }: PokemonDetailsProps) {
  const { data: pokemon, isPending, isError, error } = usePokemon(name);

  if (isPending) {
    return <p>Loading {name}...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 16,
        marginTop: 20,
        maxWidth: 300,
      }}
    >
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

      <img
        src={pokemon.sprites.front_default ?? ''}
        alt={pokemon.name}
        width={150}
        height={150}
      />

      <p>
        <strong>ID:</strong> {pokemon.id}
      </p>

      <p>
        <strong>Height:</strong> {pokemon.height}
      </p>

      <p>
        <strong>Weight:</strong> {pokemon.weight}
      </p>

      <p>
        <strong>Types:</strong>{' '}
        {pokemon.types.map((type) => type.type.name).join(', ')}
      </p>
    </div>
  );
}

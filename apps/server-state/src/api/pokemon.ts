export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

const API_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(
  limit = 20,
  offset = 0,
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${API_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon');
  }

  return response.json();
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const response = await fetch(`${API_URL}/pokemon/${name}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${name}`);
  }

  return response.json();
}

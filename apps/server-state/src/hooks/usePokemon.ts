import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../api/pokemon';

export function usePokemon(name: string | null) {
  return useQuery({
    queryKey: ['pokemon', 'details', name],
    queryFn: () => getPokemon(name!),
    enabled: !!name,
  });
}

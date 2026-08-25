import { useCounter } from '../hooks/useCounter';
import { Button } from './Button';
import { CounterDisplay } from './CounterDisplay';

type CounterProps = {
  label: string;
  initialValue?: number;
};

export function Counter({ label, initialValue = 0 }: CounterProps) {
  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div>
      <CounterDisplay id={3} label={label} count={count} />

      <Button onClick={increment}>+</Button>

      <Button onClick={decrement}>-</Button>

      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

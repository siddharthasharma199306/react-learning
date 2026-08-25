type CounterDisplayProps = {
  id: number;
  label: string;
  count: number;
};

export function CounterDisplay({ id, label, count }: CounterDisplayProps) {
  return (
    <div>
      <strong>
        #{id} {label}
      </strong>

      <p>Count: {count}</p>
    </div>
  );
}

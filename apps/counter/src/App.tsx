import { useEffect, useMemo, useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { Counter } from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';
import { Button } from './components/Button';

type Counter = {
  id: number;
  label: string;
  count: number;
};

function App() {
  const [counters, setCounters] = useState<Counter[]>([
    { id: 1, label: 'Apples', count: 5 },
    { id: 2, label: 'Oranges', count: 10 },
    { id: 3, label: 'Bananas', count: 3 },
  ]);

  const totalCount = useMemo(() => {
    console.log('Calculating total...');

    return counters.reduce((total, counter) => total + counter.count, 0);
  }, [counters]);

  useEffect(() => {
    document.title = `Total: ${totalCount}`;
  }, [totalCount]);

  function incrementCounter(id: number) {
    setCounters((currentCounters) =>
      currentCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter,
      ),
    );
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <Counter label="Apples" initialValue={5} />
        {counters.map((counter) => (
          <div key={counter.id}>
            <CounterDisplay
              id={counter.id}
              label={counter.label}
              count={counter.count}
            />

            <Button onClick={() => incrementCounter(counter.id)}>
              Increment
            </Button>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;

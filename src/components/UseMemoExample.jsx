import { useState } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState(false);

  // Hard logic
  const heavyCompute = num => {
    console.log('heavyCompute called');
    let i = 0;
    while (i < 1_000_000_000) i++;
    return num * num;
  };

  const result = heavyCompute(count);

  const style = {
    color: colored ? 'tomato' : 'black',
  };

  return (
    <div>
      <h2>useMemo Example</h2>
      <p style={style}>Result: {result}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button
        onClick={() => {
          setColored(prev => !prev);
        }}
      >
        Change color
      </button>
    </div>
  );
}

export default UseMemoExample;

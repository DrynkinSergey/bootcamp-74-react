import { useState } from 'react';

function UseRefRenderCountExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  return (
    <div>
      <h2>useRef - Count of Renders</h2>
      <p>Counter: {count}</p>
      <input placeholder='Enter the text...' onChange={e => setValue(e.target.value)} value={value} type='text' />
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </div>
  );
}

export default UseRefRenderCountExample;

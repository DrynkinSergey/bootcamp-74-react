import { useEffect, useRef, useState } from 'react';

function UseRefRenderCountExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [stateRenderCount, setStateRenderCount] = useState(0);
  const countRef = useRef(0);
  const buttonRef = useRef();

  useEffect(() => {
    countRef.current++;
    console.log('Render count: ', countRef.current);
  });
  useEffect(() => {
    setInterval(() => {
      // buttonRef.current.click();
    }, 1000);
  }, []);
  // useEffect(() => {
  //   setStateRenderCount(stateRenderCount + 1);
  //   console.log('Render count: ', stateRenderCount);
  // });
  return (
    <div>
      <h2>useRef - Count of Renders</h2>
      <p>Counter: {count}</p>
      <input placeholder='Enter the text...' onChange={e => setValue(e.target.value)} value={value} type='text' />
      <button ref={buttonRef} onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UseRefRenderCountExample;

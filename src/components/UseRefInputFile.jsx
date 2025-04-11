import { useRef } from 'react';

const UseRefInputFile = () => {
  const inputRef = useRef();
  return (
    <div>
      <h2>UseRefInputFile</h2>
      <button onClick={() => inputRef.current.click()}>Click me!</button>
      <input ref={inputRef} type='file' style={{ visibility: 'hidden' }} />
    </div>
  );
};
export default UseRefInputFile;

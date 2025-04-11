import { createContext } from 'react';
import ComponentA from './ComponentA';

export const myContext = createContext();

const UseContextExample = () => {
  const message = 'Text message';
  return (
    <myContext.Provider value={{ contextMessage: 'Context data' }}>
      <div className='parent'>
        <h2>useContext Example</h2>
        <ComponentA message={message} />
      </div>
    </myContext.Provider>
  );
};
export default UseContextExample;

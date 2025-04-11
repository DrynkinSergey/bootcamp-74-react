import { useContext } from 'react';
import { myContext } from './UseContextExample';
import useHttp from '../../hooks/useHttp';

const ComponentC = ({ message }) => {
  const { contextMessage } = useContext(myContext);
  const { data, isLoading, isError } = useHttp('https://dummyjson.com/users');
  console.log(data);
  return (
    <div className='target'>
      <h2>This is target component</h2>
      <h2>Props drilling: {message}</h2>
      <h2>Context: {contextMessage}</h2>
    </div>
  );
};
export default ComponentC;

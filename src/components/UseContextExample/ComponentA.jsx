import ComponentB from './ComponentB';

const ComponentA = ({ message }) => {
  return (
    <div className='first'>
      <h3>First Component</h3>
      <ComponentB message={message} />
    </div>
  );
};
export default ComponentA;

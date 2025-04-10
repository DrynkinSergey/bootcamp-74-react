import ComponentB from './ComponentB';

const ComponentA = () => {
  return (
    <div className='first'>
      <h3>First Component</h3>
      <ComponentB />
    </div>
  );
};
export default ComponentA;

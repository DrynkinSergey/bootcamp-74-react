import ComponentC from './ComponentC';

const ComponentB = () => {
  return (
    <div className='second'>
      <h3>Second Component</h3>
      <ComponentC />
    </div>
  );
};
export default ComponentB;

import { useId } from 'react';

const CustomInput = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Some text in label</label>
      <input id={id} />
    </div>
  );
};
export default CustomInput;

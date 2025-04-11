import ComponentC from './ComponentC';
import Modal from '../modal/Modal';
import { useToggle } from '../../hooks/useToggle';
import useKeyDown from '../../hooks/useKeyDown';
import toast from 'react-hot-toast';

const ComponentB = ({ message }) => {
  const { isOpen, open, close } = useToggle();
  useKeyDown(() => toast.error('HOOK USE KEYDOWN'), 'Shift');

  return (
    <div className='second'>
      <h3>Second Component</h3>
      {isOpen && <Modal onClose={close} />}
      <button onClick={open}>Click</button>
      <ComponentC message={message} />
    </div>
  );
};
export default ComponentB;

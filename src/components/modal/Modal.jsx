import { useEffect } from 'react';
import s from './Modal.module.css';
import useKeyDown from '../../hooks/useKeyDown';
import toast from 'react-hot-toast';
const Modal = ({ children, title = 'Default modal', onClose }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useKeyDown(() => toast.success('HOOK USE KEYDOWN'), 'h');
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

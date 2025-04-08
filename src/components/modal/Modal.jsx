import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ closeModal, children, title = 'Default modal' }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={closeModal} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

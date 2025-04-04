import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ closeModal, children, title = 'Default modal' }) => {
  useEffect(() => {
    console.log('Модальне вікно відкрито');
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const intervalID = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT');
    }, 4000);

    // Функція очистки (cleanup function)
    return () => {
      clearInterval(intervalID);
      clearTimeout(timeoutId);
      console.log('Модалка буде закрита після цього повідомлення');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = event => {
    // console.log('Target:', event.target);
    // console.log('Current target:', event.currentTarget);
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

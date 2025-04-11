import { useEffect } from 'react';

const useKeyDown = (fn, key) => {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === key) {
        fn();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [fn, key]);
};
export default useKeyDown;

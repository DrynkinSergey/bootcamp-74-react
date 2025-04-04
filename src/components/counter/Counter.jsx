import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0); // [], {}, false, '', null, () => {}
  const [step, setStep] = useState(1);

  // 1. Викликати хуки можна тільки всередині компонента
  // 2. Хуки мають бути викликані тільки в верхньому скоупі ( після оголошення функції при відкритті її тіла)
  // 3. Не можна оголошувати хуки всередині циклів, умов, функцій які знаходяться в компоненті і після return

  // 1. Спрацьовує тільки один раз при монтуванні (коли людина потрапляє до вас у додаток або оновлює сторінку)
  useEffect(() => {
    console.log('Етап монтування тільки один раз!');
  }, []);
  // Виконається ПЕРШИЙ раз і всі наступні, коли міняється лічильник!
  useEffect(() => {
    console.log('Етап оновлення лічильника. Новий стан:', counter);
  }, [counter]);

  // Виконається ПЕРШИЙ раз і всі наступні, коли ми поміняємо крок!
  useEffect(() => {
    console.log('Етап оновлення кроку. Новий стан:', step);
  }, [step]);

  // Виконання йде кожен раз коли міняється щось з залежностей а також ПЕРШИЙ раз
  useEffect(() => {
    console.log('Етап оновлення кроку. Було змінено або крок, або лічильник:', step, counter);
  }, [step, counter]);

  const handleMinusClick = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - step);
  };
  const handlePlusClick = () => {
    setCounter(counter + step);
    // console.log(counter);
  };

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='number' value={step} onChange={event => setStep(+event.target.value)} />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>
            minus
          </button>
          <button onClick={handleResetClick} className='btn'>
            reset
          </button>
          <button onClick={handlePlusClick} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

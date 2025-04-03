import s from './Counter.module.css';

export const Counter = () => {
  const handleMinusClick = () => {
    console.log('Minus click!');
  };
  const handlePlusClick = (value, e) => {
    console.log(`Click  ${value} times`);
    console.log(e);
  };
  const handleResetClick = event => {
    console.log(event);
    event.target.innerHTML = 'Hello';
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>
            minus
          </button>
          <button onClick={handleResetClick} className='btn'>
            reset
          </button>
          <button onClick={() => handlePlusClick(40)} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

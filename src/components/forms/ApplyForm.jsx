import { useState } from 'react';
import s from './Forms.module.css';
const ApplyForm = () => {
  const [applyFormData, setApplyFormData] = useState({
    username: '',
    email: '',
    age: '',
    about: '',
    specification: '',
    level: 'junior',
    agree: false,
    rules: false,
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(applyFormData);
  };
  const handleChangeInput = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      return setApplyFormData({ ...applyFormData, [name]: checked });
    }

    setApplyFormData({ ...applyFormData, [name]: value });
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input onChange={handleChangeInput} value={applyFormData.username} name='username' />
        </label>
        <label>
          <span>Email:</span>
          <input onChange={handleChangeInput} value={applyFormData.email} name='email' />
        </label>
        <label>
          <span>Age:</span>
          <input onChange={handleChangeInput} value={applyFormData.age} type='number' name='age' />
        </label>
        <label>
          <span>About:</span>
          <textarea onChange={handleChangeInput} value={applyFormData.about} name='about' rows={3} />
        </label>
        <label>
          <span>Specification:</span>
          <select onChange={handleChangeInput} value={applyFormData.specification} name='specification'>
            <option value=''>Choose your spec...</option>
            <option value='fullstack'>Fullstack</option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
            <option value='devOps'>DevOps</option>
          </select>
        </label>
        <div>
          <label>
            <input type='radio' onChange={handleChangeInput} checked={applyFormData.level === 'junior'} value='junior' name='level' />
            <span>Junior</span>
          </label>
          <label>
            <input type='radio' onChange={handleChangeInput} value='middle' name='level' checked={applyFormData.level === 'middle'} />
            <span>Middle</span>
          </label>
          <label>
            <input type='radio' onChange={handleChangeInput} value='senior' name='level' checked={applyFormData.level === 'senior'} />
            <span>Senior</span>
          </label>
        </div>
        <label>
          <input type='checkbox' checked={applyFormData.agree} value='info' onChange={handleChangeInput} name='agree' />
          <span>Agree with rules!</span>
        </label>
        <label>
          <input type='checkbox' checked={applyFormData.rules} value='correct' onChange={handleChangeInput} name='rules' />
          <span>Accept own rules</span>
        </label>
        <button disabled={!applyFormData.agree}>Apply</button>
      </form>
    </div>
  );
};
export default ApplyForm;

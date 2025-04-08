import { useState } from 'react';
import s from './Forms.module.css';
const INITIAL_VALUES = {
  username: '',
  email: '',
  age: '',
  about: '',
  specification: '',
  level: 'junior',
  agree: false,
  rules: false,
  technologies: {
    css: false,
    react: false,
    js: false,
  },
};
const ApplyForm = () => {
  const [applyFormData, setApplyFormData] = useState(INITIAL_VALUES);
  const handleSubmit = e => {
    e.preventDefault();
    const selectedTechnologies = Object.keys(applyFormData.technologies).filter(tech => applyFormData.technologies[tech]);
    console.log({ ...applyFormData, selectedTechnologies });

    setApplyFormData(INITIAL_VALUES);
  };

  const handleChangeInput = e => {
    const { name, value, type, checked } = e.target;
    if (name === 'technologies') {
      return setApplyFormData({
        ...applyFormData,
        technologies: {
          ...applyFormData.technologies,
          [value]: checked,
        },
      });
    }
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
        <div>
          <label>
            <input type='checkbox' value='css' checked={applyFormData.technologies.css} onChange={handleChangeInput} name='technologies' />
            <span>CSS</span>
          </label>
          <label>
            <input type='checkbox' value='js' onChange={handleChangeInput} name='technologies' checked={applyFormData.technologies.js} />
            <span>JS</span>
          </label>
          <label>
            <input type='checkbox' value='react' onChange={handleChangeInput} name='technologies' checked={applyFormData.technologies.react} />
            <span>React</span>
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

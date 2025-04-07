import { useState } from 'react';
import s from './Forms.module.css';
const INITIAL_STATE = {
  username: '',
  password: '',
  email: '',
  age: '',
  country: '',
};
const ControlledRegisterForm = ({ register }) => {
  const [registerData, setRegisterData] = useState(INITIAL_STATE);
  const handleSubmit = event => {
    event.preventDefault();
    register({ username: registerData.username.trim() });
    setRegisterData(INITIAL_STATE);
  };

  // const handleChangeName = e => {
  //   console.log(e.target.name, e.target.value);
  //   setRegisterData({ ...registerData, name: e.target.value });
  // };
  // const handleChangeEmail = e => {
  //   console.log(e.target.name, e.target.value);
  //   setRegisterData({ ...registerData, email: e.target.value });
  // };
  // const handleChangePassword = e => {
  //   console.log(e.target.name, e.target.value);
  //   setRegisterData({ ...registerData, password: e.target.value });
  // };

  // DRY

  const handleChangeInput = e => {
    // switch (e.target.name) {
    //   case 'password':
    //     setRegisterData({ ...registerData, password: e.target.value });
    //     break;
    //   case 'username':
    //     setRegisterData({ ...registerData, username: e.target.value });
    //     break;
    //   case 'email':
    //     setRegisterData({ ...registerData, email: e.target.value });
    //     break;
    //   default:
    //     break;
    // }
    console.log(e.target.name, e.target.value);

    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Name:</h3>
          <input value={registerData.username} onChange={handleChangeInput} name='username' />
        </label>
        <label>
          <h3>Email:</h3>
          <input value={registerData.email} onChange={handleChangeInput} name='email' />
        </label>
        <label>
          <h3>Country:</h3>
          <select value={registerData.country} onChange={handleChangeInput} name='country'>
            <option disabled value=''>
              Оберіть країну
            </option>
            <option value='UA'>Ukraine</option>
            <option value='Canada'>Canada</option>
          </select>
        </label>
        <label>
          <h3>Age:</h3>
          <input value={registerData.age} onChange={handleChangeInput} name='age' />
        </label>
        <label>
          <h3>Password:</h3>
          <input value={registerData.password} onChange={handleChangeInput} name='password' />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
export default ControlledRegisterForm;

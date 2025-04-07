import s from './Forms.module.css';
const UncontrolledForm = ({ register }) => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements);
    const form = event.target;
    console.log(form);
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    register({ username, email, password });
    form.reset();
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Name:</h3>
          <input name='username' />
        </label>
        <label>
          <h3>Email:</h3>
          <input name='email' />
        </label>
        <label>
          <h3>Password:</h3>
          <input name='password' />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
export default UncontrolledForm;

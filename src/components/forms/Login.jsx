import { Field, Form, Formik } from 'formik';
import s from './Forms.module.css';
const Login = ({ handleLogin }) => {
  const handleSubmit = (values, options) => {
    console.log(values);
    handleLogin(values.name);
    options.resetForm();
  };
  const initialValues = {
    name: '',
  };
  return (
    <div className={s.formWrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <label>
            <Field name='name' />
          </label>
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;

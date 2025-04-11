import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

const Login = () => {
  const initialValues = { username: '' };
  const { login } = useContext(authContext);
  const handleSubmit = values => {
    console.log(values);
    login(values.username);
  };
  return (
    <div className='formWrapper'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='username' />
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;

import { Field, Form, Formik } from 'formik';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  return (
    <div className='formWrapper'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <label>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' />
          </label>
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;

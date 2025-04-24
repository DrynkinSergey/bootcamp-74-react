import { Field, Form, Formik } from 'formik';

const RegisterForm = ({ onSubmit }) => {
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    onSubmit(values);
    options.resetForm();
  };
  return (
    <div className='formWrapper'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <label>
            <span>Name:</span>
            <Field name='name' />
          </label>
          <label>
            <span>Email:</span>
            <Field name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' />
          </label>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;

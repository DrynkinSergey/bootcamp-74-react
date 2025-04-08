import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './Forms.module.css';
import * as Yup from 'yup';
const FormikRegisterForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    console.log(options);
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('This field is Required '),
    email: Yup.string().matches(re, 'Is not email').required(),
    password: Yup.string().min(6, 'Min 6 chars.').max(12).required(),
  });
  return (
    <div className={s.formWrapper}>
      <Formik validationSchema={registerSchema} onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name='name' />
            <ErrorMessage className={s.error} name='name' component='p' />
          </label>
          <label>
            <span>Email:</span>
            <Field name='email' />
            <ErrorMessage className={s.error} name='email' component='p' />
          </label>
          <label>
            <span>Password:</span>
            <Field name='password' type='password' />
            <ErrorMessage className={s.error} name='password' component='p' />
          </label>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormikRegisterForm;

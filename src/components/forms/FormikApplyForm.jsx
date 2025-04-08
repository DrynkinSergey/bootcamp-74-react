import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './Forms.module.css';
import * as Yup from 'yup';
const FormikApplyForm = () => {
  const handleSubmit = (values, options) => {
    const technologies = Object.keys(values.technologies).filter(value => values.technologies[value]);
    console.log({ ...values, technologies });
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    age: '',
    specification: '',
    about: '',
    level: 'junior',
    agree: false,
    technologies: {
      react: false,
      js: false,
      css: false,
    },
  };

  const applyValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Min 3 chars').required(),
    email: Yup.string().email().required(),
    age: Yup.number().min(10).max(100).positive(),
    about: Yup.string().min(10).max(100),
    specification: Yup.string().oneOf(['backend', 'frontend', 'fullstack']).required(),
    level: Yup.string().oneOf(['junior', 'middle']),
    agree: Yup.boolean().oneOf([true]).required(),
    technologies: Yup.object().test('at-least-one-active', 'Minimum 1 tech', value => Object.values(value).some(value => value === true)),
  });

  return (
    <div className={s.formWrapper}>
      <Formik validationSchema={applyValidationSchema} onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name='name' />
            <ErrorMessage name='name' component='p' className={s.error} />
          </label>
          <label>
            <span>Email:</span>
            <Field name='email' />
            <ErrorMessage name='email' component='p' className={s.error} />
          </label>
          <label>
            <span>Age:</span>
            <Field name='age' type='number' />
            <ErrorMessage name='age' component='p' className={s.error} />
          </label>
          <label>
            <span>About:</span>
            <Field as='textarea' name='about' />
            <ErrorMessage name='about' component='p' className={s.error} />
          </label>
          <label>
            <span>Specification:</span>
            <Field as='select' name='specification'>
              <option value='' disabled>
                Enter spec..
              </option>
              <option value='backend'>Backend</option>
              <option value='frontend'>Frontend</option>
              <option value='fullstack'>Fullstack</option>
              <option value='qa'>QA</option>
            </Field>
            <ErrorMessage name='specification' component='p' className={s.error} />
          </label>
          <div>
            <label>
              <Field type='radio' name='level' value='junior' />
              Junior
            </label>
            <label>
              <Field type='radio' name='level' value='middle' />
              Middle
            </label>
            <label>
              <Field type='radio' name='level' value='senior' />
              Senior
            </label>
            <ErrorMessage name='level' component='p' className={s.error} />
          </div>
          <div>
            <label>
              <Field type='checkbox' name='technologies.js' />
              JS
            </label>
            <label>
              <Field type='checkbox' name='technologies.react' />
              React
            </label>
            <label>
              <Field type='checkbox' name='technologies.css' />
              CSS
            </label>
            <ErrorMessage name='technologies' component='p' className={s.error} />
          </div>
          <div>
            <label>
              <Field type='checkbox' name='agree' />I confirm with rules
              <ErrorMessage name='agree' component='p' className={s.error} />
            </label>
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormikApplyForm;

import { Field, Form, Formik } from 'formik';
import s from './Posts.module.css';
const EditForm = ({ handleEditPost, initialValues }) => {
  const handleSubmit = (values, options) => {
    handleEditPost(values);
    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <Field name='title' />
          </label>
          <label>
            <Field as='textarea' name='body' rows={3} />
          </label>
          <button type='submit'>Add post</button>
        </Form>
      </Formik>
    </div>
  );
};
export default EditForm;

import { Field, Form, Formik } from 'formik';
import s from './Posts.module.css';
const AddPost = ({ handleAddPost }) => {
  const handleSubmit = (values, options) => {
    handleAddPost(values);
    options.resetForm();
  };
  const initialValues = {
    title: '',
    body: '',
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
export default AddPost;

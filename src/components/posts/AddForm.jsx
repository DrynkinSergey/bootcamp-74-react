import { Field, Form, Formik } from 'formik';

const AddForm = ({ handleAddPost }) => {
  const initialValues = {
    body: '',
    title: '',
  };
  const handleSubmit = values => {
    handleAddPost(values);
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field placeholder='title' name='title' />
          <Field placeholder='body' name='body' />
          <button type='submit'>Add post</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;

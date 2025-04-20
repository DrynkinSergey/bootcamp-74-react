import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
const AddForm = ({ handleAddTodo }) => {
  const initialValues = {
    todo: '',
  };
  const validationSchema = Yup.object().shape({
    todo: Yup.string().required(),
  });
  const handleSubmit = (values, options) => {
    console.log(values);
    handleAddTodo(values);
    options.resetForm();
  };
  return (
    <div>
      <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='todo' />
          <ErrorMessage name='todo' component='div' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;

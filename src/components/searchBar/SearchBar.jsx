import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeSearchString }) => {
  const initialValues = {
    query: '',
  };

  const handleSubmit = values => {
    console.log(values);
    handleChangeSearchString(values.query);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='query' placeholder='Name or surname....' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;

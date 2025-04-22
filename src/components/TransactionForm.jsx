import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectCategories } from '../redux/categoriesSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
const typeOptions = [
  { value: 'income', label: 'Income' },
  { value: 'expense', label: 'Expense' },
];
const TransactionForm = ({ initialValues, handleSubmit }) => {
  const categories = useSelector(selectCategories);
  return (
    <div className='min-h-[90vh]  flex  items-center justify-center'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => (
          <Form className='flex p-4 shadow-xl flex-col gap-4 max-w-xl w-full'>
            <label className='flex flex-col gap-1'>
              <span>Title</span>
              <Field className='input input-primary w-full' name='title' />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Description</span>
              <Field as='textarea' className='input input-primary p-2 w-full' name='description' rows={3} />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Type</span>
              <Select options={typeOptions} className='w-full' name='type' onChange={option => setFieldValue('type', option.value)} />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Category</span>
              <Select options={categories} className='w-full' name='category' onChange={option => setFieldValue('category', option.value)} />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Amount</span>
              <Field type='number' className='input input-primary w-full' name='amount' />
            </label>
            <label className='flex flex-col gap-1'>
              <span>Date</span>
              <DatePicker
                name='date'
                className='input input-primary w-full'
                selected={values.date}
                onChange={date => {
                  setFieldValue('date', date.toISOString());
                }}
                dateFormat='dd.MM.yyyy'
                placeholderText='Pick date:'
              />
            </label>
            <button type='submit' className='btn btn-outline btn-primary'>
              Add
            </button>
            <Link to='/transactions' className='btn btn-outline btn-ghost'>
              Cancel
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default TransactionForm;

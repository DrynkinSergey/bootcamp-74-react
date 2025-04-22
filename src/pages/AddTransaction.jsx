import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesThunk } from '../redux/categoriesOps';
import { selectCategories } from '../redux/categoriesSlice';
import TransactionForm from '../components/TransactionForm';

const AddTransaction = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const initialValues = {
    title: '',
    type: null,
    description: '',
    amount: '',
    category: null,
    date: new Date(),
  };
  const handleSubmit = values => {
    console.log(values);
  };
  return <TransactionForm handleSubmit={handleSubmit} initialValues={initialValues} />;
};
export default AddTransaction;

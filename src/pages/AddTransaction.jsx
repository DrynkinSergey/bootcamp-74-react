import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesThunk } from '../redux/categoriesOps';
import TransactionForm from '../components/TransactionForm';
import { addTransactionThunk } from '../redux/transactionsOps';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddTransaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(addTransactionThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Transaction added!');
        navigate('/transactions');
      })
      .catch();
  };
  return <TransactionForm handleSubmit={handleSubmit} initialValues={initialValues} />;
};
export default AddTransaction;

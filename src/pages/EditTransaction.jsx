import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesThunk, myApi } from '../redux/categoriesOps';
import TransactionForm from '../components/TransactionForm';
import { addTransactionThunk, editTransactionThunk } from '../redux/transactionsOps';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const EditTransaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { transactionId } = useParams();
  const [transaction, setTransaction] = useState(null);
  useEffect(() => {
    myApi.get(`transactions/${transactionId}`).then(res => setTransaction(res.data));
  }, [transactionId]);
  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  console.log(transaction);

  const initialValues = {
    ...transaction,
  };
  const handleSubmit = values => {
    console.log(values);
    dispatch(editTransactionThunk(values))
      .unwrap()
      .then(() => {
        toast.success('Transaction added!');
        navigate('/transactions');
      })
      .catch();
  };
  if (!transaction) return null;
  return <TransactionForm isEdit handleSubmit={handleSubmit} initialValues={initialValues} />;
};
export default EditTransaction;

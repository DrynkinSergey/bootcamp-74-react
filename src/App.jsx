import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import AddTransaction from './pages/AddTransaction';
import EditTransaction from './pages/EditTransaction';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound';
import { useDispatch } from 'react-redux';
import { fetchTransactions } from './redux/transactionsOps';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/transactions/add' element={<AddTransaction />} />
        <Route path='/transactions/edit' element={<EditTransaction />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

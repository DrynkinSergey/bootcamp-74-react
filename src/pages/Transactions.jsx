import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../redux/transactionsSlice';

const Transactions = () => {
  const transactions = useSelector(selectTransactions);
  return (
    <div>
      <div className='py-2 px-2'>
        <Link to='add' className='btn btn-outline btn-primary '>
          Add transaction
        </Link>
      </div>
      <Table transactions={transactions} />
    </div>
  );
};
export default Transactions;

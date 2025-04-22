import { Link } from 'react-router-dom';

const Transactions = () => {
  return (
    <div>
      <div className='float-right py-2 px-2'>
        <Link to='add' className='btn btn-outline btn-primary '>
          Add transaction
        </Link>
      </div>
    </div>
  );
};
export default Transactions;

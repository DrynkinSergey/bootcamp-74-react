import { useSelector } from 'react-redux';
import StatInfo from '../components/StatInfo';
import { selectTransactions } from '../redux/transactionsSlice';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <div>
      <StatInfo transactions={transactions} />

      <div className='w-[400px] h-[500px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={150} height={40} data={transactions}>
            <Bar dataKey='amount' fill='#8884d8' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Statistics;

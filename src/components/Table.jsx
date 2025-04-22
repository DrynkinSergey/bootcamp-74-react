import clsx from 'clsx';
import { format } from 'date-fns';
import { X } from 'lucide-react';

const Table = ({ transactions }) => {
  return (
    <div>
      <div className='overflow-x-auto px-10 rounded-box border border-base-content/5 bg-base-100'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, idx) => (
              <tr className={clsx(item.type === 'expense' ? 'bg-red-100' : 'bg-green-200')} key={item.id}>
                <th>{idx + 1}</th>
                <td>{item.title}</td>
                <td>{item.description || '-'}</td>
                <td className='capitalize'>{item.type}</td>
                <td className='capitalize'>{item.category}</td>
                <td>{format(item.date, 'dd MMMM yyyy')}</td>
                <td>{item.amount}</td>
                <td>
                  <X />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;

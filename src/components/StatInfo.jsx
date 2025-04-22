const StatInfo = ({ transactions = [] }) => {
  const { incomes, expenses } = transactions.reduce(
    (total, curr) =>
      curr.type === 'expense' ? { ...total, expenses: total.expenses + curr.amount } : { ...total, incomes: total.incomes + curr.amount },
    { incomes: 0, expenses: 0 }
  );
  return (
    <div>
      <div className='stats bg-base-100 border border-base-300'>
        <div className='stat'>
          <div className='stat-title'>Expenses</div>
          <div className='stat-value'>${expenses}</div>
        </div>
        <div className='stat'>
          <div className='stat-title'>Incomes</div>
          <div className='stat-value'>${incomes}</div>
        </div>
      </div>
    </div>
  );
};
export default StatInfo;

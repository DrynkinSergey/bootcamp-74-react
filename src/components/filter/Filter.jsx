import { useDispatch } from 'react-redux';
import { changeSelectedTab } from '../../redux/todoSlice';
import s from './Filter.module.css';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <button onClick={() => dispatch(changeSelectedTab('all'))}>All</button>
      <button onClick={() => dispatch(changeSelectedTab('active'))}>Active</button>
      <button onClick={() => dispatch(changeSelectedTab('completed'))}>Completed</button>
    </div>
  );
};
export default Filter;

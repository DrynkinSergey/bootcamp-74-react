import clsx from 'clsx';
import s from './TodoList.module.css';
export const TodoItem = ({ id, completed, todo, handleDeleteItem, handleToggleTodo }) => {
  return (
    <li className={clsx(s.item, completed && s.completed)}>
      <input checked={completed} onChange={() => handleToggleTodo(id)} type='checkbox' />
      <span>{todo}</span>
      <button onClick={() => handleDeleteItem(id)} className='btn border'>
        Delete
      </button>
    </li>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { addTodo, deleteTodo, changeFilter } from '../../redux/todoSlice';
import { deleteTodoThunk } from '../../redux/operations';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);
  const isLoading = useSelector(state => state.todos.isLoading);
  const isError = useSelector(state => state.todos.isError);
  const dispatch = useDispatch();

  const handleAddTodo = ({ todo }) => {
    if (!todo) {
      return toast.error('Data is not full');
    }
    const isExist = todos.some(item => item.todo === todo);
    if (isExist) {
      return toast.error('This value already exist!');
    }
    const newTodoObj = {
      id: nanoid(),
      completed: false,
      todo: todo,
    };
    dispatch(addTodo(newTodoObj));
  };

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      <input value={filter} onChange={e => dispatch(changeFilter(e.target.value))} placeholder='Enter any value for search' />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h2>{item.todo}</h2>
            <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{isError}</h2>}
    </div>
  );
};
export default TodoList;

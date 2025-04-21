import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import toast from 'react-hot-toast';
import { changeFilter } from '../../redux/todoSlice';
import { addTodoThunk, changeTitleThunk, deleteTodoThunk, toggleCompletedTodoThunk } from '../../redux/operations';

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
      todo: todo,
    };
    dispatch(addTodoThunk(newTodoObj));
  };

  const handleToggleTodoCompleted = body => {
    dispatch(toggleCompletedTodoThunk({ ...body, completed: !body.completed }));
  };

  const handleRenameTodo = body => {
    const text = prompt('Enter new value:');
    if (!text.trim()) {
      return toast.error('Enter correct new value');
    }
    dispatch(changeTitleThunk({ ...body, todo: text }));
  };

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      <input value={filter} onChange={e => dispatch(changeFilter(e.target.value))} placeholder='Enter any value for search' />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <input type='checkbox' checked={item.completed} onChange={() => handleToggleTodoCompleted(item)} />
            <h2>{item.todo}</h2>
            <button onClick={() => handleRenameTodo(item)}>Edit</button>
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

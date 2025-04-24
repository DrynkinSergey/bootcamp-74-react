import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import toast from 'react-hot-toast';
import { selectIsLoading, selectTodosByTabMemo, selectUncompletedTodosMemo } from '../../redux/todoSlice';
import { addTodoThunk, changeTitleThunk, deleteTodoThunk, toggleCompletedTodoThunk } from '../../redux/operations';
import Filter from '../filter/Filter';

const TodoList = () => {
  const todos = useSelector(selectTodosByTabMemo);
  const isLoading = useSelector(selectIsLoading);
  const uncompletedTasks = useSelector(selectUncompletedTodosMemo);
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

  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      <Filter />
      <h2>Uncompleted: {uncompletedTasks}</h2>
      <ul>
        {todos.map(item => (
          <li
            style={{
              display: 'flex',
              border: '1px solid black',
              justifyContent: 'space-between',
              width: '70%',
              margin: '0 auto',
              alignItems: 'center',
              padding: 20,
            }}
            key={item.id}
          >
            <input type='checkbox' checked={item.completed} onChange={() => handleToggleTodoCompleted(item)} />
            <h2>{item.todo}</h2>
            <div>
              <button onClick={() => handleRenameTodo(item)}>Edit</button>
              <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};
export default TodoList;

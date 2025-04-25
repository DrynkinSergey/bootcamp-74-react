import { useDispatch } from 'react-redux';
import TodoList from '../../components/todoList/TodoList';
import { useEffect } from 'react';
import { fetchTodos } from '../../redux/operations';

const Tasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchTodos(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <TodoList />
    </div>
  );
};
export default Tasks;

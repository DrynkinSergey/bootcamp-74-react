import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import { useEffect } from 'react';
import { fetchTodos } from './redux/operations';

const App = () => {
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
      <Header />
      <TodoList />
    </div>
  );
};
export default App;

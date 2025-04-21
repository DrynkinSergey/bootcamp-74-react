import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';
import { useEffect } from 'react';
import { fetchTodos } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};
export default App;

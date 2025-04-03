import { Counter } from './components/counter/Counter';
import Header from './components/header/Header';
import Products from './components/products/Products';
import { TodoList } from './components/todolist/Todolist';

const App = () => {
  return (
    <>
      <Header />
      <Counter />
      <TodoList />
      <Products />
    </>
  );
};
export default App;

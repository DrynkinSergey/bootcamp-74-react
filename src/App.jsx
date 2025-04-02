import { ColorPicker } from './components/colorPicker/ColorPicker';
import { Counter } from './components/counter/Counter';
import Header from './components/header/Header';
import { TodoList } from './components/todolist/Todolist';

const App = () => {
  return (
    <>
      <Header />
      <Counter />
      <ColorPicker />
      <TodoList />
    </>
  );
};
export default App;

import { ColorPicker } from './components/colorPicker/ColorPicker';
import { Counter } from './components/counter/Counter';
import Header from './components/header/Header';
import { TodoList } from './components/todolist/Todolist';
import Voting from './components/voting/Voting';

const App = () => {
  return (
    <>
      <Header />
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      <TodoList />
      <Voting />
    </>
  );
};
export default App;

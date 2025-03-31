import Header from './components/header/Header';
import Message from './components/message/Message';
import Todolist from './components/todolist/Todolist';
import Profile from './components/profile/Profile';

import profile from './assets/user.json';
import todos from './assets/todos.json';
const App = () => {
  return (
    <>
      <Header />
      <hr />
      <h2>Стилізація в React</h2>
      <hr />
      <section>
        <Message text='Test text props' isOnline />
        <Message author='Taras' isOnline />
        <Message author='Alla' text='Test text props' />
      </section>
      <hr />
      <Profile data={profile} />
      <hr />
      <Todolist data={todos} />
    </>
  );
};

export default App;

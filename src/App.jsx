import Header from './components/header/Header';
import Message from './components/message/Message';
import Todolist from './components/todolist/Todolist';
import Profile from './components/profile/Profile';
import s from './App.module.css';
import profile from './assets/user.json';
import todos from './assets/todos.json';
const App = () => {
  return (
    <>
      <Header />
      <hr />
      <h2 className='title'>Стилізація в React</h2>
      <hr />
      <section>
        <Message variant='new' text='Test text props' isOnline />
        <Message variant='old' author='Taras' isOnline />
        <Message author='Alla' text='Test text props' />
      </section>
      <hr />
      <Profile data={profile} />
      <hr />
      <Todolist data={todos} />

      <div className={s.flex}>
        <div className={s.box}></div>
        <div className={s.boxRed}></div>
        <div className={s.box}></div>
      </div>
    </>
  );
};

export default App;

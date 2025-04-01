import Header from './components/header/Header';
import Message from './components/message/Message';
import Todolist from './components/todolist/Todolist';
import Profile from './components/profile/Profile';
import s from './App.module.css';
import todos from './assets/todos.json';
import img from './assets/image.png';
import userProfile from './assets/user.json';

const App = () => {
  const counter = 1;
  const message = `This is test ${counter} message`;
  return (
    <section>
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
      <Profile {...userProfile} />
      <hr />
      <Todolist data={todos} />

      <div className={s.flex}>
        <div className={s.box}></div>
        <div className={s.boxRed}></div>
        <div className={s.box}></div>
      </div>
      <img src={img} alt='' />
    </section>
  );
};

export default App;

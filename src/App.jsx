import Header from './components/header/Header';
import Message from './components/message/Message';
import cats from './assets/cats.json';
import dogs from './assets/dog.json';
import List from './components/list/List';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';
const App = () => {
  const isOpen = true;
  const age = 22;

  return (
    <>
      <Header />
      <Message text='Test text props' isOnline />
      <Message author='Taras' isOnline />
      <Message author='Alla' text='Test text props' />
      {isOpen && <p>Modal is open</p>} {/* ->> {false} */}
      {age > 18 ? (
        <>
          <h2>Доросла людина</h2>
          <button>Click</button>
        </>
      ) : (
        <h2>Дитина</h2>
      )}
      <Modal title='Modal 1'>
        <h2>Реклама</h2>
      </Modal>
      <Modal title='Modal 2'>
        <h2>Вийти?</h2>
        <button>Так</button>
        <button>Ні</button>
      </Modal>
      <Button outlined>Click me</Button>
      <Button>✅ Click me</Button>
    </>
  );
};

export default App;

import { useState } from 'react';
import { Counter } from './components/counter/Counter';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import Products from './components/products/Products';
import { TodoList } from './components/todolist/Todolist';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <Header />
      <button onClick={openModal}>Open modal</button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad, distinctio perferendis laudantium hic molestiae illo ut totam
          voluptas aut iusto tenetur eum. Dicta praesentium adipisci distinctio quisquam doloribus minus!
        </Modal>
      )}
      {/* <Counter /> */}
      <TodoList />
      {/* <Products /> */}
    </>
  );
};
export default App;

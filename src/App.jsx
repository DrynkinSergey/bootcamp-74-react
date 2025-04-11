import UseContextExample from './components/UseContextExample/UseContextExample';
import Header from './components/header/Header';
import { useContext } from 'react';
import { authContext } from './providers/AuthProvider';
import Login from './components/login/Login';
import Modal from './components/modal/Modal';
import { useToggle } from './hooks/useToggle';
import useHttp from './hooks/useHttp';

const App = () => {
  const { isOpen, open, close } = useToggle();
  const { data, isLoading, isError } = useHttp('https://dummyjson.com/products');
  console.log(data);

  const { user } = useContext(authContext);

  if (!user) {
    return <Login />;
  }
  return (
    <div>
      <Header />
      <h2>Welcome, {user}!</h2>
      <button onClick={open}>Open modal</button>
      {isOpen && (
        <Modal onClose={close}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, ut amet, molestias dolor autem animi aspernatur minus nisi error
          officiis voluptatibus, ex repudiandae! Dignissimos dicta nihil in officiis, vero necessitatibus?
        </Modal>
      )}
      {/* Step 1. Use memo calc logic */}
      {/* <UseMemoExample /> */}

      {/* Step 2. Use ref */}
      {/* <UseRefRenderCountExample /> */}

      {/* Step 3. Use ref file*/}
      {/* <UseRefInputFile /> */}

      {/* Step 4. Use context */}
      <UseContextExample />
    </div>
  );
};
export default App;

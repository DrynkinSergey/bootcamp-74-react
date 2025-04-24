import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import { useEffect } from 'react';
import { fetchTodos } from './redux/operations';
import { Route, Routes } from 'react-router-dom';
import Tasks from './pages/Tasks/Tasks';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchTodos(controller.signal));

    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

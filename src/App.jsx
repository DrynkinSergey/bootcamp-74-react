import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import { useEffect } from 'react';
import { fetchTodos } from './redux/operations';
import { Route, Routes } from 'react-router-dom';
import Tasks from './pages/Tasks/Tasks';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { refreshUserThunk } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/tasks'
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />

        {/* <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/tasks' />} /> */}
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path='/register' element={<RestrictedRoute component={<Register />} redirectTo='/tasks' />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

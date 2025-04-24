import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../../components/loginForm/LoginForm';
import { loginThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const onSubmit = credentials => {
    dispatch(loginThunk(credentials));
  };
  if (isLoggedIn) {
    return <Navigate to='/tasks' />;
  }
  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
export default Login;

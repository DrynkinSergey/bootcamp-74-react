import { useDispatch } from 'react-redux';
import LoginForm from '../../components/loginForm/LoginForm';
import { loginThunk } from '../../redux/auth/operations';
const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = credentials => {
    dispatch(loginThunk(credentials));
  };

  return (
    <>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};
export default Login;

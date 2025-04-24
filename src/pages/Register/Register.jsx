import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../../components/registerForm/RegisterForm';
import { registerThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const onSubmit = credentials => {
    dispatch(registerThunk(credentials));
  };
  if (isLoggedIn) {
    return <Navigate to='/tasks' />;
  }
  return (
    <>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};
export default Register;

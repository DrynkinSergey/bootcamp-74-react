import { useDispatch } from 'react-redux';
import RegisterForm from '../../components/registerForm/RegisterForm';
import { registerThunk } from '../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = credentials => {
    dispatch(registerThunk(credentials));
  };

  return (
    <>
      <RegisterForm onSubmit={onSubmit} />
    </>
  );
};
export default Register;

import FormikRegisterForm from './components/forms/FormikRegisterForm';
import Header from './components/header/Header';

const App = () => {
  const register = data => {
    console.log('Data received!');
    setTimeout(() => {
      console.log('Register user...');
    }, 1000);
    setTimeout(() => {
      console.log('User registered successfully! ');
      console.log(data);
    }, 3000);
  };
  return (
    <>
      <Header />
      <FormikRegisterForm />
    </>
  );
};
export default App;

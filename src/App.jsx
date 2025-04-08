import ApplyForm from './components/forms/ApplyForm';
import ControlledRegisterForm from './components/forms/ControlledRegisterForm';
// import UncontrolledForm from './components/forms/UncontrolledForm';
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
    </>
  );
};
export default App;

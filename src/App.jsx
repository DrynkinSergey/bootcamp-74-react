import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import Company from './components/nestedRoutes/Company';
import Aim from './components/nestedRoutes/Aim';
import Team from './components/nestedRoutes/Team';
import Users from './pages/users/Users';
import UserDetails from './pages/userDetails/UserDetails';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* http://localhost/about/company */}
        {/* http://localhost/about/aim */}
        {/* http://localhost/about/team */}
        <Route path='/about' element={<About />}>
          <Route path='company' element={<Company />} />
          <Route path='aim' element={<Aim />} />
          <Route path='team' element={<Team />} />
        </Route>
        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

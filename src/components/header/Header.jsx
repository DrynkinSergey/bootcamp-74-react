import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import AuthNavbar from './AuthNavbar';
import { logoutThunk } from '../../redux/auth/operations';
const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header>
      <h2>Auth </h2>
      {isLoggedIn && <h2>Welcome, {user.name}!</h2>}
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/tasks'>
          Tasks
        </NavLink>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/posts'>
          Posts
        </NavLink>
        {!isLoggedIn && <AuthNavbar />}
        {isLoggedIn && <button onClick={() => dispatch(logoutThunk())}>logout</button>}
      </nav>
    </header>
  );
};
export default Header;

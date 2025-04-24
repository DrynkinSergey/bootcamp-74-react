import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const AuthNavbar = () => {
  return (
    <>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/login'>
        Login
      </NavLink>
      <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/register'>
        Register
      </NavLink>
    </>
  );
};
export default AuthNavbar;

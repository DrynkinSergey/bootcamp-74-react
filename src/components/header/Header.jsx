import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  return (
    <header>
      <h2>Routing </h2>
      <nav className={s.nav}>
        <NavLink className={({ isActive }) => clsx(s.link, isActive && s.active)} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/about'>
          About
        </NavLink>
        <NavLink className={setActiveClass} to='/users'>
          Users
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

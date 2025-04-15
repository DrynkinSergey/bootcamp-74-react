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
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/recipes'>
          Recipes
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

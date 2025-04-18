import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  const setActive = ({ isActive }) => clsx(s.link, isActive && s.active);
  return (
    <header>
      <h2>Redux </h2>
      <nav className='flex gap-4'>
        <NavLink className={setActive} to='/'>
          Home
        </NavLink>
        <NavLink className={setActive} to='/products'>
          Products
        </NavLink>
        <NavLink className={setActive} to='/favorites'>
          Favorites
        </NavLink>
        <NavLink className={setActive} to='/cart'>
          Cart
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

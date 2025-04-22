import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  const setActive = ({ isActive }) => clsx(s.link, isActive && s.active);
  return (
    <header>
      <h2>Money Tracker </h2>
      <nav className='flex gap-4'>
        <NavLink className={setActive} to='/'>
          Home
        </NavLink>
        <NavLink className={setActive} to='/transactions'>
          Transactions
        </NavLink>
        <NavLink className={setActive} to='/statistics'>
          Statistics
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

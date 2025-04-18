import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
const Header = () => {
  const setActive = ({ isActive }) => clsx(s.link, 'relative', isActive && s.active);
  const cart = useSelector(state => state.cart.cartItems);
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
          {cart.length > 0 && (
            <div className='badge text-black badge-primary badge-md bg-teal-300 absolute right-[-10px] top-[-10px] z-[-1]'>{cart.length}</div>
          )}
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;

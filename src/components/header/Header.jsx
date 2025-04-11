import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

const Header = () => {
  const { logout } = useContext(authContext);

  return (
    <header>
      <h2>Hooks | useMemo, useRef, useContext </h2>
      <h2>Module 4 Part 2</h2>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;

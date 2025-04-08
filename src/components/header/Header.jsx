const Header = ({ logout }) => {
  return (
    <header>
      <h2>Forms</h2>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;

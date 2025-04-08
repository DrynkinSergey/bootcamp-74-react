const SearchBar = ({ handleChangeSearch }) => {
  return (
    <div>
      <input onChange={handleChangeSearch} placeholder='Enter post title or body....' />
    </div>
  );
};
export default SearchBar;

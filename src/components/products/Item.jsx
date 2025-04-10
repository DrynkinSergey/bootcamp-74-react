const Item = ({ product, addToFavorites }) => {
  return (
    <li>
      <img src={product.thumbnail} />
      <p>{product.title}</p>
      <button onClick={() => addToFavorites(product)}>Like</button>
    </li>
  );
};
export default Item;

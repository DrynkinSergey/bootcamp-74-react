import Item from './Item';
import s from './Products.module.css';
const List = ({ products, addToFavorites }) => {
  return (
    <ul className={s.list}>
      {products.map(item => (
        <Item addToFavorites={addToFavorites} key={item.id} product={item} />
      ))}
    </ul>
  );
};
export default List;

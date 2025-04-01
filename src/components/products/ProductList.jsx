import ProductItem from './ProductItem';
import s from './Products.module.css';
const ProductList = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default ProductList;

import products from './../../assets/products.json';
import ProductList from './ProductList';
const Products = () => {
  return (
    <div>
      <h1>Products galary</h1>
      <ProductList data={products} />
    </div>
  );
};
export default Products;

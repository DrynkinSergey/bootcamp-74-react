import { useEffect } from 'react';
import { getAllProducts } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';
import ProductItem from '../products/ProductItem';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data.products));
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <h2 className='text-center text-4xl underline font-bold'>Products</h2>
      <ul className='grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((item, idx) => (
          <ProductItem key={item.id} item={item} idx={idx} />
        ))}
      </ul>
    </div>
  );
};
export default Products;

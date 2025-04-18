import { useEffect } from 'react';
import { getAllProducts } from '../../services/api';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../redux/productsSlice';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data.products));
    };
    fetchData();
  }, [dispatch]);
  return <div>Products</div>;
};
export default Products;

import { useSelector } from 'react-redux';
import ProductItem from '../products/ProductItem';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  return (
    <div>
      <ul className='grid grid-cols-3 gap-4'>
        {favorites.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default Favorites;

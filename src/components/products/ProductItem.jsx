import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { addToFav, removeFromFav } from '../../redux/favoriteSlice';

const ProductItem = ({ item, idx = 1 }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);
  const favorites = useSelector(state => state.favorites.favorites);
  const isExist = cart.some(product => product.id === item.id);
  const isFavorite = favorites.some(product => product.id === item.id);
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success('Item added to cart!');
  };
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success('Item removed successfully!');
  };
  return (
    <div className={clsx('card relative bg-base-100 w-full shadow-sm  ', idx % 3 && 'bg-teal-100')}>
      {isExist && <ShoppingCart className='absolute right-1 top-1 z-10' />}
      {isFavorite && <Heart className='absolute left-1 top-1 z-10 text-red-500' />}
      <figure>
        <Link to={`/products/${item.id}`}>
          <img src={item.thumbnail} alt='Shoes' />
        </Link>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{item.title}</h2>
        <p>{item.description}</p>
        <div className='card-actions justify-end flex gap-2'>
          {isFavorite ? (
            <button onClick={() => dispatch(removeFromFav(item.id))} className='btn btn-accent'>
              UnLike
            </button>
          ) : (
            <button onClick={() => dispatch(addToFav(item))} className='btn btn-accent'>
              Like
            </button>
          )}
          {isExist ? (
            <>
              <Link to='/cart' className='btn btn-secondary'>
                Go to cart
              </Link>
              <button onClick={handleRemove} className='btn btn-error'>
                Remove
              </button>
            </>
          ) : (
            <button onClick={handleAddToCart} className='btn btn-primary'>
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductItem;

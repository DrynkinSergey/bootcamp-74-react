import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const totalPrice = cart.reduce((total, curr) => curr.price + total, 0);
  const dispatch = useDispatch();
  if (!cart.length) {
    return (
      <div className='flex flex-col gap-4 min-h-screen items-center justify-center'>
        <img width={400} src='https://cdn-icons-png.flaticon.com/512/11329/11329060.png' />
        <h3 className='text-2xl font-bold'>Your cart is empty</h3>
        <Link className='btn btn-primary' to='/products'>
          Buy something!
        </Link>
      </div>
    );
  }
  return (
    <div className='grid grid-cols-[2fr_1fr] gap-10'>
      <section>
        <ul className='w-full flex flex-col gap-4 mx-auto'>
          {cart.map(item => (
            <li key={item.id} className='px-5 py-5 rounded-2xl flex gap-2 justify-between items-center shadow-lg'>
              <img src={item.thumbnail} width={100} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))} className='btn btn-outline btn-error'>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className='py-10'>
        <h2 className='text-2xl font-bold'>Total price: ${totalPrice}</h2>
        <button onClick={() => dispatch(clearCart())} className='btn btn-outline btn-error'>
          Clear cart
        </button>
      </section>
    </div>
  );
};
export default Cart;

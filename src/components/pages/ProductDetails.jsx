import { useEffect, useState } from 'react';
import { getProductById } from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const product = await getProductById(productId);
      setProduct(product);
    };
    getData();
  }, [productId]);

  if (!product) {
    return <p>loading...</p>;
  }
  const isExist = cart.some(item => item.id === product.id);

  return (
    <div>
      <section className='grid grid-cols-2 gap-3 py-10'>
        <div className='flex justify-center items-center'>
          <img src={product.thumbnail} />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-bold'>{product.title}</h2>
          <p className='text-xl'>{product.description}</p>
          <hr />
          <p>Category: {product.category} </p>
          <hr />

          <ul className='flex gap-2'>
            {product.tags.map(tag => (
              <li key={tag}>
                <div className='badge badge-primary'>{tag}</div>
              </li>
            ))}
          </ul>
          <hr />
          <div className='flex gap-2'>
            {isExist ? (
              <>
                <Link to='/cart' className='btn btn-secondary'>
                  Go to cart
                </Link>
                <button onClick={() => dispatch(removeFromCart(product.id))} className='btn btn-error'>
                  Remove
                </button>
              </>
            ) : (
              <button onClick={() => dispatch(addToCart(product))} className='btn btn-primary'>
                Buy Now
              </button>
            )}
          </div>
          <h3>Gallery:</h3>
          <ul className='flex flex-wrap gap-4 py-4'>
            {product.images.map(image => (
              <li key={image}>
                <img width={200} src={image} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default ProductDetails;

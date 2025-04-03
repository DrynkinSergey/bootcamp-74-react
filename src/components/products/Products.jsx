import { ShoppingCart } from 'lucide-react';
import products from '../../assets/products.json';
import s from './Products.module.css';
const Products = () => {
  return (
    <div>
      <h1>Products APP</h1>
      <section className={s.products}>
        <ul className={s.list}>
          {products.map(product => (
            <li key={product.id} className={s.item}>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <button>
                <ShoppingCart />
              </button>
            </li>
          ))}
        </ul>
        <section className={s.cart}>
          <h2>Корзина</h2>
          <p>Тут має виводитись список товарів, котрі ви додаєте до кошику а саме</p>
          <ul>
            <li>Сумма корзини</li>
            <li>Кількість товарів</li>
            <li>Список товарів</li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default Products;

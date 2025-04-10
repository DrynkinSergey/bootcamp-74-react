import { useEffect, useState } from 'react';
import List from './List';
import { fetchProducts, fetchProductsByQuery } from '../../services/api';
import SearchBar from '../searchBar/SearchBar';
import s from './Products.module.css';
import toast from 'react-hot-toast';
const Products = () => {
  //'https://dummyjson.com/products'
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(20);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const data = query.trim()
          ? await fetchProductsByQuery({
              q: query,
              skip,
              limit,
            })
          : await fetchProducts({
              skip,
              limit,
              signal: controller.signal,
            });
        setTotal(data.total);
        setProducts(prev => [...prev, ...data.products]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [skip, query, limit]);
  const handleChangeQuery = newQuery => {
    setQuery(newQuery);
    setProducts([]);
    setSkip(0);
  };
  const handleChangeLimit = e => {
    setLimit(+e.target.value);
    setProducts([]);
  };

  const productIsExistInFav = id => {
    return favorites.some(item => item.id === id);
  };
  const addToFavorites = product => {
    const isExist = productIsExistInFav(product.id);
    if (isExist) {
      return toast.error('Item already exist in fav');
    }
    setFavorites([...favorites, product]);
  };
  const removeFromFavorites = product => {
    setFavorites(favorites.filter(item => item.id !== product.id));
  };
  return (
    <div style={{ paddingBottom: 40 }}>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <select value={limit} onChange={handleChangeLimit}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      <section className={s.listWrapper}>
        <div>
          {products.length > 0 ? <List addToFavorites={addToFavorites} products={products} /> : <h2>No data...</h2>}
          {products.length < total && <button onClick={() => setSkip(prev => prev + limit)}>Load more</button>}
        </div>
        <div>
          <h2>Favorites</h2>
          <h3>Total price: {favorites.reduce((total, curr) => curr.price + total, 0)}</h3>
          <ul>
            {favorites.map(item => (
              <li key={item.id}>
                <img src={item.thumbnail} width={100} />
                <p>{item.title}</p>
                <button onClick={() => removeFromFavorites(item)}>remove</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Products;

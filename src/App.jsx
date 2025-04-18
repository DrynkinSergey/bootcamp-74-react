import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import ProductDetails from './components/pages/ProductDetails';
import Favorites from './components/pages/Favorites';
import Cart from './components/pages/Cart';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

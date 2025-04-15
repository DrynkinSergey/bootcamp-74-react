import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SingleRecipe from './pages/SingleRecipe';
import Recipes from './pages/Recipes';
import Header from './components/header/Header';
import AuthorDetails from './components/nestedRoutes/AuthorDetails';
import RecipesByCategory from './components/nestedRoutes/RecipesByCategory';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:recipeId' element={<SingleRecipe />}>
          <Route path='owner/:userId' element={<AuthorDetails />} />
          <Route path='category/:categoryId' element={<RecipesByCategory />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getRecipesById } from '../services/api';
import s from './Styles.module.css';
const SingleRecipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/recipes');
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRecipesById(recipeId);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [recipeId]);
  if (!recipe) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className={s.recipe_wrapper}>
      <section>
        <img src={recipe.image} />
      </section>
      <section>
        <Link to={goBackRef.current}>Back to recipes</Link>
        <h2>{recipe.name}</h2>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ul>
          {recipe.instructions.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <hr />
        <nav className={s.nav}>
          {/* localhost/recipes/1/owner/3 */}
          <NavLink to={`owner/${recipe.userId}`}>Show author</NavLink>
          {recipe.tags.map(item => (
            <NavLink key={item} to={`category/${item}`}>
              {item}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </section>
    </div>
  );
};
export default SingleRecipe;

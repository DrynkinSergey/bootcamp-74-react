import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRecipesByCategory } from '../../services/api';
import s from './Styles.module.css';

//
const RecipesByCategory = () => {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRecipesByCategory(categoryId);
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [categoryId]);
  return (
    <div>
      <ul className={s.list}>
        {recipes.map(item => (
          <li key={item.id}>
            <Link to={`/recipes/${item.id}`}>
              <img src={item.image} width={150} />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RecipesByCategory;

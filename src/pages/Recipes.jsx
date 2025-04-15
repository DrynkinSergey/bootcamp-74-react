import { useEffect, useState } from 'react';
import { getRecipes, getRecipesByQuery } from '../services/api';
import List from '../components/List/List';
import SearchBar from '../components/searchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    const getData = async () => {
      try {
        const { recipes } = query ? await getRecipesByQuery(query) : await getRecipes();
        setRecipes(prev => [...prev, ...recipes]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = newQuery => {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
    setRecipes([]);
  };
  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <List items={recipes} />
    </div>
  );
};
export default Recipes;

import axios from 'axios';

export const getUserById = async userId => {
  const response = await axios.get(`https://dummyjson.com/users/${userId}`);
  return response.data;
};

export const getPostsByUserId = async userId => {
  const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`);
  return response.data.posts;
};

export const getPostDetailsById = async postId => {
  const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
  return response.data;
};

export const getRecipes = async () => {
  const response = await axios.get('https://dummyjson.com/recipes');
  return response.data;
};
export const getRecipesByQuery = async q => {
  const response = await axios.get(`https://dummyjson.com/recipes/search?q=${q}`);
  return response.data;
};
export const getRecipesById = async recipeId => {
  const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
  return response.data;
};
export const getRecipesByCategory = async category => {
  const response = await axios.get(`https://dummyjson.com/recipes/tag/${category}`);
  return response.data;
};

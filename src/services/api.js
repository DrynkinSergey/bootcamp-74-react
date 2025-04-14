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

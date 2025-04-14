import axios from 'axios';

export const getUserById = async userId => {
  const response = await axios.get(`https://dummyjson.com/users/${userId}`);
  return response.data;
};

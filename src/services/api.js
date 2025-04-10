import axios from 'axios';

export const fetchNews = async (page, query, signal) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search?page=${page}&query=${query}`, { signal });
  return response.data;
};

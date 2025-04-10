import axios from 'axios';

export const fetchNews = async (page, query, signal) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search?page=${page}&query=${query}`, { signal });
  return response.data;
};

export const fetchProducts = async ({ signal, limit, skip }) => {
  const response = await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`, {
    signal,
  });
  return response.data;
};

export const fetchProductsByQuery = async queryParams => {
  const response = await axios.get(`https://dummyjson.com/products/search`, {
    params: {
      limit: 10,
      ...queryParams,
    },
  });
  return response.data;
};

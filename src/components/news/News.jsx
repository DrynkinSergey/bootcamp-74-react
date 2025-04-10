import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { DotLoader } from 'react-spinners';
import SearchBar from '../searchBar/SearchBar';
import List from '../list/List';
import { fetchNews } from '../../services/api';
const News = () => {
  //https://hn.algolia.com/api/v1/search
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('react');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchNews(page, query, controller.signal);
        // setHits(data.hits);
        setHits(prev => [...prev, ...data.hits]);
        setTotalPages(data.nbPages);
      } catch (error) {
        console.log(error);
        if (error.code !== 'ERR_CANCELED') {
          setIsError(true);
          toast.error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [page, query]);

  const handleChangeQuery = newQuery => {
    toast.success(`New query: ${newQuery}`);
    setQuery(newQuery);
    setHits([]);
    setPage(0);
  };
  return (
    <div style={{ paddingBottom: 100 }}>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <List hits={hits} />
      {isLoading && <DotLoader />}
      {isError && <h2>Something went wrong... Try again later</h2>}
      {!isLoading && page < totalPages - 1 && <button onClick={() => setPage(prev => prev + 1)}>Load more</button>}
    </div>
  );
};
export default News;

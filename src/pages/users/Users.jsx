import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/searchBar/SearchBar';

const Users = () => {
  const [users, setUsers] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users?limit=200');
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleChangeSearchString = string => {
    searchParams.set('query', string);
    setSearchParams(searchParams);
  };

  const filteredData = users?.filter(
    item => item.firstName.toLowerCase().includes(query.toLowerCase()) || item.lastName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <SearchBar handleChangeSearchString={handleChangeSearchString} />
      <h2>Users CRM</h2>
      <ul>
        {filteredData?.map(user => (
          <li key={user.id}>
            <Link state={location} to={user.id.toString()}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;

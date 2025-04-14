import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Users CRM</h2>
      <ul>
        {users?.map(user => (
          // localhost:5173/users/1
          // localhost:5173/users/4
          // localhost:5173/users/40
          <li key={user.id}>
            <Link to={user.id.toString()}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;

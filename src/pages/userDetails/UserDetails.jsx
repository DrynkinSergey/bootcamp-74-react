import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getUserById } from '../../services/api';

const UserDetails = () => {
  // localhost:5173/users/:userId -> {userId:5}
  const { userId } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUserById(userId);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>User details #{userId}</h2>
      <img src={user.image} />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>phone: {user.phone}</p>
      <nav>
        <NavLink to='info'>Info</NavLink>
        <NavLink to='posts'>Posts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default UserDetails;

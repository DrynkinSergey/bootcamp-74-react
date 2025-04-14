import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/api';

const UserDetails = () => {
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

  return (
    <div>
      <h2>User details #{userId}</h2>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
    </div>
  );
};
export default UserDetails;

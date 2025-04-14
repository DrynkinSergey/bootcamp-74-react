import { useEffect, useState } from 'react';
import { getPostsByUserId } from '../../services/api';
import { Link, Outlet, useParams } from 'react-router-dom';
import s from './UserPosts.module.css';
const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  // localhost:5173/users/1/posts
  // localhost:5173/users/:userId/posts
  const { userId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPostsByUserId(userId);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);
  if (!posts?.length) {
    return <h2>No activity yet...</h2>;
  }
  return (
    <div className={s.wrapper}>
      <section>
        <h2>User activity:</h2>
        <ul>
          {posts.map(item => (
            <li key={item.id}>
              <Link to={item.id.toString()}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <Outlet />
    </div>
  );
};
export default UserPosts;

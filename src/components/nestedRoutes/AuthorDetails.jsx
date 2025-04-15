import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/api';

const AuthorDetails = () => {
  const { userId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUserById(userId);
        setAuthor(user);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);
  if (!author) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <img src={author.image} width={150} />
      <h2>
        {author.firstName} {author.lastName}
      </h2>
    </div>
  );
};
export default AuthorDetails;

import { useEffect, useState } from 'react';
import { getPostDetailsById } from '../../services/api';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const [post, setPost] = useState({});
  // http:localhost:5173/users/1/posts/15
  // http:localhost:5173/users/:userId/posts/:postId
  const { postId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPostDetailsById(postId);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [postId]);
  return (
    <div>
      <h3>Post details:</h3>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};
export default PostDetails;

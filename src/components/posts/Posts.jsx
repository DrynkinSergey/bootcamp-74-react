import { useAddPostMutation, useDeletePostMutation, useGetPostsQuery } from '../../redux/postsApi';
import AddForm from './AddForm';

const Posts = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();
  const [deletePost, { isLoading: isDeleteLoading }] = useDeletePostMutation();
  const handleAddPost = data => {
    console.log(data);
    addPost(data);
  };
  return (
    <div>
      <AddForm handleAddPost={handleAddPost} />
      {isLoading && <h2>Loading...</h2>}
      {posts.map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <button disabled={isDeleteLoading} onClick={() => deletePost(item.id)}>
            {isDeleteLoading ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </div>
  );
};
export default Posts;

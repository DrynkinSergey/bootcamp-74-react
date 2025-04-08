import PostItem from './PostItem';
import s from './Posts.module.css';
const PostList = ({ data, author, handleDeletePost, handleOpen }) => {
  return (
    <div>
      <ul className={s.list}>
        {data.map(item => (
          <PostItem handleOpen={handleOpen} handleDeletePost={handleDeletePost} item={item} key={item.id} author={author} />
        ))}
      </ul>
    </div>
  );
};
export default PostList;

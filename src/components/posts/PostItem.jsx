const PostItem = ({ item, author, handleDeletePost, handleOpen }) => {
  return (
    <li>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
      <div>Author: {item.author}</div>
      {author === item.author && (
        <div>
          <button onClick={() => handleOpen(item)}>Edit</button>
          <button onClick={() => handleDeletePost(item.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};
export default PostItem;

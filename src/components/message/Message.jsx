const Message = ({ isOnline, author = 'Missed Author Name', text = 'Default text' }) => {
  return (
    <div>
      <h2>{author}</h2>
      {/* {isOnline && <p>Online</p>} */}
      {isOnline ? <p>Online</p> : <p>Offline</p>}
      <p>Message: {text}</p>
    </div>
  );
};
export default Message;

import clsx from 'clsx';
import s from './Message.module.scss';

const Message = ({ isOnline, variant, author = 'Missed Author Name', text = 'Default text' }) => {
  return (
    <div>
      <h2 className={s.title}>{author}</h2>
      {/* {isOnline && <p>Online</p>} */}
      {/* {isOnline ? <p className={`${s.online} ${s.bold}`}>Online</p> : <p className={s.offline}>Offline</p>} */}
      {isOnline ? <p className={clsx(s.online, s.bold)}>Online</p> : <p className={s.offline}>Offline</p>}
      <p className={clsx(`myClass-${variant}`, s.bold, isOnline ? s.online : s.offline)}>Message: {text}</p>
    </div>
  );
};
// button
// button-red
// button-primary
export default Message;

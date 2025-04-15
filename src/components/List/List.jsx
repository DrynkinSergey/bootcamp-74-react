import { Link, useLocation } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import s from './List.module.css';
const List = ({ items }) => {
  const location = useLocation();
  return (
    <div>
      <h2>Recipes</h2>
      <ul className={s.wrapper}>
        {items.map(item => (
          <li key={item.id}>
            <Link state={location} to={item.id.toString()}>
              <ListItem item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;

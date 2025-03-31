import Item from './Item';

const List = ({ data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((item, idx) => (
          <Item key={idx} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default List;

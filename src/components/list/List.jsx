const List = ({ hits }) => {
  return (
    <div>
      <ul>
        {hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url} target='_blank'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;

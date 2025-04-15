const ListItem = ({ item }) => {
  return (
    <div>
      <img src={item.image} />
      <p>{item.name}</p>
    </div>
  );
};
export default ListItem;

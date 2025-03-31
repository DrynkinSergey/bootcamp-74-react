const Item = ({ item }) => {
  return (
    <li>
      <img src={item.image} width={200} />
      <p>{item.name}</p>
      <p>{item.phone}</p>
    </li>
  );
};
export default Item;

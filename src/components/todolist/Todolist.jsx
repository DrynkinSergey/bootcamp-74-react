const Todolist = ({ data }) => {
  return (
    <section>
      <h2>Todos</h2>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            <p>{item.todo}</p>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Todolist;

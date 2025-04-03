const BtnOptions = ({ handleOptionClick, optionsData }) => {
  console.log(optionsData);

  return (
    <section>
      {optionsData.map(item => (
        <button key={item} onClick={() => handleOptionClick(item)}>
          {item}
        </button>
      ))}
    </section>
  );
};
export default BtnOptions;

const Statistics = ({ emoji, sum }) => {
  console.log('Statistics updated');

  console.log('Calc');

  // for (let i = 1; i < 10_000_000_000; i++) {}
  return (
    <ul>
      <li>✅ :{emoji['✅']}</li>
      <li>❤️:{emoji['❤️']}</li>
      <li>✌️:{emoji['✌️']}</li>
      <li>Total:{sum}</li>
    </ul>
  );
};
export default Statistics;

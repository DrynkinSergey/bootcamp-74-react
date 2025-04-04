const EmojiPicker = ({ updateEmojiStat, resetEmojiStat, total }) => {
  console.log('EmojiPicker updated');

  return (
    <div>
      <button onClick={() => updateEmojiStat('✅')}>✅</button>
      <button onClick={() => updateEmojiStat('❤️')}>❤️</button>
      <button onClick={() => updateEmojiStat('✌️')}>✌️</button>
      {total > 0 && <button onClick={resetEmojiStat}>reset</button>}
    </div>
  );
};
export default EmojiPicker;

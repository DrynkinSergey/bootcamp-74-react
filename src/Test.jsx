import { useState } from 'react';
import EmojiPicker from './components/emojiPicker/EmojiPicker';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';

const Test = () => {
  const [emoji, setEmoji] = useState({
    '✅': 0,
    '❤️': 0,
    '✌️': 0,
  });

  const updateEmojiStat = emojiVariant => {
    setEmoji({ ...emoji, [emojiVariant]: emoji[emojiVariant] + 1 });
  };
  const resetEmojiStat = () => {
    setEmoji({
      '✅': 0,
      '❤️': 0,
      '✌️': 0,
    });
  };

  const total = emoji['✅'] + emoji['✌️'] + emoji['❤️'];
  return (
    <div>
      <EmojiPicker updateEmojiStat={updateEmojiStat} total={total} resetEmojiStat={resetEmojiStat} />
      {total > 0 ? <Statistics emoji={emoji} sum={total} /> : <Notification />}
    </div>
  );
};
export default Test;

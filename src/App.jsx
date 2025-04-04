import { useEffect, useState } from 'react';
import Description from './components/description/Description';
import EmojiPicker from './components/emojiPicker/EmojiPicker';
import Statistics from './components/statistics/Statistics';
import Notification from './components/notification/Notification';

const App = () => {
  const [emoji, setEmoji] = useState({
    '✅': 0,
    '❤️': 0,
    '✌️': 0,
  });
  const [buttonIsVisible, setButtonIsVisible] = useState(false);

  const updateEmojiStat = emojiVariant => {
    console.log(emojiVariant);
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

  useEffect(() => {
    if (total > 0) {
      setButtonIsVisible(true);
    }
  }, [total]);

  return (
    <>
      <Description />
      <EmojiPicker updateEmojiStat={updateEmojiStat} total={total} resetEmojiStat={resetEmojiStat} />
      {total > 0 ? <Statistics emoji={emoji} sum={total} /> : <Notification />}
    </>
  );
};
export default App;

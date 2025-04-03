import { useState } from 'react';
import BtnOptions from './BtnOptions';

const Voting = () => {
  const [options, setOptions] = useState({
    macos: 0,
    windows: 0,
    linux: 0,
  });

  const handleOptionClick = targetOption => {
    setOptions({ ...options, [targetOption]: options[targetOption] + 1 });

    // if (option === 'windows') {
    //   return setOptions({ ...options, windows: options.windows + 1 });
    // }

    // if (option === 'linux') {
    //   return setOptions({ ...options, linux: options.linux + 1 });
    // }

    // if (option === 'macos') {
    //   return setOptions({ ...options, macos: options.macos + 1 });
    // }

    // if (option === 'android') {
    //   return setOptions({ ...options, android: options.android + 1 });
    // }
  };
  return (
    <div>
      <ul>
        {Object.keys(options).map(item => (
          <li key={item}>
            {item}:{options[item]}
          </li>
        ))}
      </ul>

      <BtnOptions handleOptionClick={handleOptionClick} optionsData={Object.keys(options)} />
    </div>
  );
};
export default Voting;

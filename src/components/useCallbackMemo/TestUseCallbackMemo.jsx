import React, { useState, useMemo, useCallback } from 'react';
import Count from './Count';
import IsFive from './IsFive';
import Text from './Text';

const TestUseCallbackMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [value, setValue] = useState('');

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  const result = useMemo(() => {
    let i = 0;
    while (i < 600000000) i++;
    return count2 === 5 ? '✅ It is 5' : ' ❌ not 5';
  }, [count2]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const message = useCallback(
    (text) => {
      return `${text} ${value}`;
    },
    [value]
  );

  return (
    <div className='main'>
      <div>
        <div className='counter'>
          <h5>Counter 1</h5>
          <div>
            <button onClick={handleClick1}>+</button>
            <Count id={1} value={count1} />
          </div>
        </div>
        <Text message={message} />

        <input onChange={handleChange} value={value} />

        <div className='counter'>
          <h5>Counter 2</h5>
          <div>
            <button onClick={handleClick2}>+</button>
            <Count id={2} value={count2} />
          </div>
          <hr />
          <IsFive result={result} value={count2} />
        </div>
      </div>
    </div>
  );
};

export default TestUseCallbackMemo;

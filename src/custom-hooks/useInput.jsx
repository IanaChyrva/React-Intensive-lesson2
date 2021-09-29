import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (value) => {
    setValue(value);
  };

  return [value, onChange];
};

export default useInput;

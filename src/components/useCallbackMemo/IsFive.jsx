import React from 'react';

let rerenderCount = 0;

const isFive = ({ result }) => {
  console.log(`IsFive rendered ${++rerenderCount}`);

  return (
    <div>
      <div>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default React.memo(isFive, (prevProps, nextProps) => {
  console.log(prevProps.value, nextProps.value);
  if (nextProps.value === 5) {
    return false;
  } else return true;
});

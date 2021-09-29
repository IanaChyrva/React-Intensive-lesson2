import React from 'react';

const render = {
  count1: 0,
  count2: 0,
};

export default React.memo(({ id, value }) => {
  console.log(`Counter ${id} rendered ${++render[`count${id}`]}`);
  return (
    <div>
      <div>{value}</div>
      <div></div>
    </div>
  );
});

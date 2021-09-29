import React from 'react';

export default React.memo((props) => {
  console.log(props.message('Value is:'));
  return (
    <div>
      <div>{props.message('Value is:')}</div>
    </div>
  );
});

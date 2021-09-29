import React, { useState } from 'react';
import './styles.css';

const SharedLogic = (props) => {
  const [color, setColor] = useState('');

  const handleClick = () => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

  return (
    <div className='wrapper'>
      <button onClick={handleClick}>Click</button>
      <div>{props.render(color)}</div>
    </div>
  );
};

export default SharedLogic;

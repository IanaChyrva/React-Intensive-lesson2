import React from 'react';
import SharedLogic from './SharedLogic';
import './styles.css';

const Block = () => {
  return (
    <>
      <SharedLogic
        render={(color) => (
          <div className='block' style={{ backgroundColor: color }} />
        )}
      />
    </>
  );
};

export default Block;

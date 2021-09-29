import React from 'react';
import SharedLogic from './SharedLogic';
import './styles.css';

const Block2 = (props) => {
  return (
    <>
      <SharedLogic render={(color) => <h2 style={{ color: color }}>text</h2>} />
    </>
  );
};

export default Block2;

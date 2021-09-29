import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'addition':
      return state + 1;
    case 'subtraction':
      return state - 1;
    case 'multiply':
      return state * 2;
    case 'divide':
      return state / 2;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Calc = () => {
  const [calculation, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div> Output is: {calculation}</div>
      <button onClick={() => dispatch('addition')}>Add</button>
      <button onClick={() => dispatch('subtraction')}>Subtract</button>
      <button onClick={() => dispatch('multiply')}>Multiply</button>
      <button onClick={() => dispatch('divide')}>Divide</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  );
};

export default Calc;

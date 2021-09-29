import React, { useContext } from 'react';
import ThemeContex from './context';

const ContextDark = () => {
  const { dark } = useContext(ThemeContex);

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          background: dark.background,
          color: dark.color,
        }}
      >
        component
      </div>
    </div>
  );
};

export default ContextDark;

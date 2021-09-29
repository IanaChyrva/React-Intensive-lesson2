import React, { useContext } from 'react';
import ThemeContex from './context';

const ContextLight = () => {
  const { light } = useContext(ThemeContex);

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          background: light.background,
          color: light.color,
        }}
      >
        component
      </div>
    </div>
  );
};

export default ContextLight;

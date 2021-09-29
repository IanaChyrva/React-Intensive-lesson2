import React from 'react';

const theme = {
  light: {
    background: 'lightgray',
    color: 'black',
  },
  dark: {
    background: 'black',
    color: 'white',
  },
};

const ThemeContex = React.createContext(theme);

export default ThemeContex;

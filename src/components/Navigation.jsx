import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to='/hocs' className='link' activeClassName='selected'>
        Hocs
      </NavLink>
      <NavLink to='/render-props' className='link' activeClassName='selected'>
        ReenderProps
      </NavLink>
      <NavLink to='/hooks' className='link' activeClassName='selected'>
        Hooks:
      </NavLink>
    </div>
  );
};

export default Navigation;

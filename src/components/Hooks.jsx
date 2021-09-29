import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import ToggleColor from './forCustomHooks/toggle/ToggleColor';
import Users from './forCustomHooks/users/Users';
import TestContext from './forUseContext/TestContext';
import Calc from './forUseReducer/Calc';
import AddItem from './stateEffect/AddItem';
import TestUseCallbackMemo from './useCallbackMemo/TestUseCallbackMemo';

const Hooks = () => {
  return (
    <>
      <div className='navigation'>
        <h2>Hooks</h2>
        <NavLink to='/hooks/custom' className='link' activeClassName='selected'>
          Custom hooks
        </NavLink>
        <NavLink
          to='/hooks/usecontext'
          className='link'
          activeClassName='selected'
        >
          useContext
        </NavLink>
        <NavLink
          to='/hooks/usestate-useeffect'
          className='link'
          activeClassName='selected'
        >
          useState / useEffect
        </NavLink>
        <NavLink
          to='/hooks/usecallback-usememo'
          className='link'
          activeClassName='selected'
        >
          useCallback / useMemo
        </NavLink>
        <NavLink
          to='/hooks/usereducer'
          className='link'
          activeClassName='selected'
        >
          useReducer
        </NavLink>
      </div>

      <Switch>
        <Route path='/hooks/custom'>
          <div className='main'>
            <Users />
            <hr />
            <ToggleColor />
          </div>
        </Route>
        <Route path='/hooks/usecontext'>
          <TestContext />
        </Route>
        <Route path='/hooks/usestate-useeffect'>
          <AddItem />
        </Route>
        <Route path='/hooks/usecallback-usememo'>
          <TestUseCallbackMemo />
        </Route>
        <Route path='/hooks/usereducer'>
          <div className='main'>
            <Calc />
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Hooks;

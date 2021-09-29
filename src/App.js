import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Comments from './hoc/Comments';
import Posts from './hoc/Posts';
import React from 'react';
import Block from './renderProp/Block';
import Block2 from './renderProp/Block2';
import Hooks from './components/Hooks';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path='/hocs'>
          <>
            <div className='main'>
              <Comments title='Comments' />
              <Posts title='Posts' />
            </div>
          </>
        </Route>
        <Route path='/render-props'>
          <>
            <div className='main'>
              <Block />
              <Block2 />
            </div>
          </>
        </Route>
        <Route path='/hooks'>
          <Hooks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './components/signup';
import Landing from './components/Landing';


function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/signup'>
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  
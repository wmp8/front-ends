import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './src/components/Signup';
import Landing from './src/components/Landing';


function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  
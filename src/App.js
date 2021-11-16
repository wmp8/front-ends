import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Landing from './components/Landing';




function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Landing />}/>
              
            
            <Route exact path='/signup' element={<Signup />} />
              
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  

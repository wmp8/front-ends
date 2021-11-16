import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Landing from './components/Landing';
import NavBar  from "./components/Navbar";
import Plantobj from './components/Plantobj';
import Plant from './components/Plant';

import './App.css'



function App() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Landing />}/>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/plantobj' element={<Plantobj />} />
            <Route exact path='/plant' element={<Plant />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  

import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Login from './components/login';
import Logout from './components/Logout';
import { useState } from 'react';
import PrivateRoute from './components/Privateroute';

import NavBar  from "./components/Navbar";
import Plantobj from './components/Plantobj';
import Plant from './components/Plant';


import './App.css'

let plant = {
  "image_url": "marble-pothos.png",
  "light_requirement": "Thrives in medium to low indirect light. Not suited for intense, direct sun.",
  "nickname": "Marble Queen Pothos",
  "plant_id": 1,
  "species": "",
  "user_id": 1,
  "water_frequency": "Water every 1-2 weeks"
}


//hello test merge change

function App() {
  const [open, setOpen] = useState('False')
 
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar open={open} setOpen={setOpen}/>
          <Routes>
            <Route exact path='/' element={<Landing />}/>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/logout' element={<Logout />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route
              path="/plantobj"
              element={
                <PrivateRoute>
                  <Plantobj />
                </PrivateRoute>
              }
            />
            <Route exact path='/plant' element={<Plant plant={plant}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  

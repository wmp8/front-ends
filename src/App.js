import React, { useEffect }  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Login from './components/login';
import Logout from './components/Logout';
import { useState } from 'react';
import PrivateRoute from './components/Privateroute';
import EditPlant from './components/EditPlant';
import NavBar  from "./components/Navbar";
import Plantobj from './components/Plantobj';
import Plant from './components/Plant';
import axiosWithAuth from './utils/axiosWithAuth';

import './App.css'






function App() {
  const [open, setOpen] = useState('False')
  const [plants, setPlants] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

   const getPlants =() => {
    axiosWithAuth()
    .get(`/plants/all`)
    .then(resp=> {
      setPlants(resp.data);
      console.log('appjs', resp.data);
    })
    .catch(err=> {
      console.log(err);
    })
  }

  useEffect(()=>{
    if (isLoggedIn) {
      console.log('AM I HERE?')
      getPlants()
    }
  }, [isLoggedIn]);

  const changeLoggedIn = (status) => {
    setIsLoggedIn(status)
  }

  const updatePlants = () => {
    getPlants()
   }


    return (
      <div className='App'>
        <NavBar open={open} setOpen={setOpen}/>
        <Routes>
            <Route exact path='/' element={<Landing />}/>
            <Route exact path='/login' element={<Login changeLoggedIn={changeLoggedIn} />} />
            <Route exact path='/logout' element={<Logout changeLoggedIn={changeLoggedIn}  />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route
              path="/plantobj"
              element={
                <PrivateRoute>
                  <Plantobj plants={plants}/>
                </PrivateRoute>
              }
            />
            <Route 
              exact path='/plant' 
              element={
              <PrivateRoute>
                <Plant updatePlants={updatePlants}/>
              </PrivateRoute>
                }
            />
            <Route exact path='/edit' element={<EditPlant updatePlants={updatePlants}/>}/>
          </Routes>
      </div>
    );
  }
  
  export default App;
  

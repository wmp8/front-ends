import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';


const EditPlant = (props)=> {
    useEffect(() => {
        axiosWithAuth()
        .get(`/plants/:plant_id`)
        .then(resp=> {
         
        })
        .catch(err=> {
          console.log(err);
        })
      },[])

      return(
          <h1>edit form</h1>
      )
}

export default EditPlant;
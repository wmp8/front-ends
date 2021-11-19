// plant has id: integer ,nickname: string  ,species: string h2o frequency:Type determined by implementation, image

import React, { useState, useEffect } from "react";
import "./plant.css";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from 'react-router-dom';




const Plant = ({ plant, getPlant }) => {
  const navigate = useNavigate()

  const handleEditClick = (id) => {
    getPlant(id)
    navigate('/edit')
}
  return (
    plant ?
    <div className="plant-container">
      <h1>Plant Diaries</h1>

      <div className="plant-card">
        <div className="topPlant">


          <h3>Name: {plant.nickname}</h3>


          <div className="img-container">
            <img
              className="plantImg"
              src={plant.image_url}
              alt={plant.nickname}
            />
          </div>
        </div>

        <div className="plant-card-content">
          <div className="text">
            <div className="plantText">

              <p> Light Requirement: </p>
              <p>{plant.light_requirement}</p>
            </div>

            <div className="plantText">
              <p>Plant ID: </p>
              <p>{plant.plant_id}</p>
            </div>

            <div className="plantText">
              <p>Species: </p>
              <p>{plant.species}</p>
            </div>

            <div className="plantText">
              <p>User-ID: </p>
              <p>{plant.user_id}</p>
            </div>

            <div className="plantText">
              <div className="water">

                <p>Water frequency: </p>
                <p>{plant.water_frequency}</p>

              </div>
            </div>
          </div>


   

          <button onClick={() => handleEditClick(plant.plant_id)}>Edit</button>

        </div>
      </div>
    </div> : null
  );
};

export default Plant;

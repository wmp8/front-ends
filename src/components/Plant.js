// plant has id: integer ,nickname: string  ,species: string h2o frequency:Type determined by implementation, image
import React  from "react";
import "./plant.css";



const Plant = ({ plant }) => {
  
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
              <p> Light Requirement: {plant.light_requirement}</p>
            </div>

            <div className="plantText">
              <p>Plant ID: {plant.plant_id}</p>
            </div>

            <div className="plantText">
              <p>Species: {plant.species}</p>
            </div>

            <div className="plantText">
              <p>User-ID: {plant.user_id}</p>
            </div>

            <div className="plantText">
              <div className="water">
                <p>Water frequency: {plant.water_frequency}</p>
              </div>
            </div>
          </div>

          <button>Edit</button>
        </div>
      </div>
    </div> : null
  );
};

export default Plant;

// plant has id: integer ,nickname: string  ,species: string h2o frequency:Type determined by implementation, image
import React, { useState } from "react";
import "./plant.css";
import axios from "axios";

let plantData = {
  image_url: "/images/marble-pothos.png",
  light_requirement:
    "Thrives in medium to low indirect light. Not suited for intense, direct sun.",
  nickname: "Marble Queen Pothos",
  plant_id: 1,
  species: "",
  user_id: 1,
  water_frequency: "Water every 1-2 weeks",
};
console.log(plantData);

const Plant = () => {
  const [data, setData] = useState(plantData);

  axios
    .get("https://github.com/wmp8/back-ends#get-apiplantsplant_id")
    .then((res) => {})
    .catch((err) => {});

  return (
    <div className="plant-container">
      <h1>Plant Diaries</h1>

      <div className="plant-card">
        <div className="topPlant">
          
          <h3>Name: {data.nickname}</h3>

          <div className="img-container">
            <img
              className="plantImg"
              src={data.image_url}
              alt={data.nickname}
            />
          </div>
        </div>

        <div className="plant-card-content">
          <div className="text">
            <div className="plantText">
              <p> Light Requirement: {data.light_requirement}</p>
            </div>

            <div className="plantText">
              <p>Plant ID: {data.plant_id}</p>
            </div>

            <div className="plantText">
              <p>Species: {data.species}</p>
            </div>

            <div className="plantText">
              <p>User-ID: {data.user_id}</p>
            </div>

            <div className="plantText">
              <div className="water">
                <p>Water frequency: {data.water_frequency}</p>
              </div>
            </div>
          </div>

          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Plant;

// plant has id: integer ,nickname: string  ,species: string h2o frequency:Type determined by implementation, image
import React from "react";
import "./plant.css";
import axios from "axios";

const Plant = () => {
  return (
    <div className="plant-container">
      <h1>Plant Page</h1>
      <div className="plant-card">
        <div className="img-container">
          <img src="https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?cs=srgb&dl=pexels-valeria-boltneva-827518.jpg&fm=jpg" />
        </div>
        <div className="plant-card-content">
        <div className="text">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <button>Edit</button>
        <button>Update</button>

        </div>
      </div>
    </div>
  );
};

export default Plant;

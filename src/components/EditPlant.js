import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';


const EditPlant = ({plant, getPlant,updatePlants})=> {
  const [formData, setFormData] = useState({
    light_requirement: plant.light_requirement ? plant.light_requirement : '',
    species: plant.species ? plant.species : '',
    water_frequency: plant.water_frequency ? plant.water_frequency : '',
    nickname: plant.nickname ? plant.nickname : ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    console.log('FORM DATA', formData)
}

const handleSubmit = (e) => {
  e.preventDefault()
  axiosWithAuth()
 .put(`plants/update/${plant.plant_id}`, formData)
    .then(resp=> {
      	updatePlants()
	getPlant(plant.plant_id)
     	navigate(`/plant`);

    })
    .catch(err=> {
      console.log(err);
    })
}

      return(
        <div className="col">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">						
              <h4 className="modal-title">plant name <strong>{plant.nickname}</strong></h4>
            </div>
            <div className="modal-body">					
              <div className="form-group">
                <label>Light</label>
                <input value={formData.light_requirement} onChange={handleChange} name="light_requirement" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Species</label>
                <input value={formData.species} onChange={handleChange} name="species" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Water</label>
                <input value={formData.water_frequency} onChange={handleChange} name="water_frequency" type="text" className="form-control"/>
              </div>       
            </div>
            <div className="modal-footer">			    
              <input type="submit" className="btn btn-info" value="Save"/>
              <Link to={`/plant`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
            </div>
          </form>
          </div>
	</div>);
      
}

export default EditPlant;

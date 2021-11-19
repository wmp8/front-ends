import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom';
import './createplant.css'
const initialState = {
  error: '',
  loading: false
}





const CreatePlant = ({ updatePlants })=> {
    const [formData, setFormData] = useState({
      light_requirement: '',
      species: '',
      water_frequency: '',
      nickname: '',
      image_url: ''
    })
    const [state, setState] = useState(initialState)
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
   .post(`plants/create`, formData)
      .then(resp=> {
        updatePlants()
        navigate(`/plantObj`);
  
      })
      .catch(err=> {
        console.log(err);
        setState({
          ...state,
          error: `ERROR: ${err.response.data.message}`
        });
      })
  }
  
        return(
          <div className="col">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">						
                <h4 className="modal-title">New Plant</h4>
              </div>
              <div className="modal-body">
              <div className="form-group">
                  <label>Name</label>
                  <input value={formData.nickname} onChange={handleChange} name="nickname" type="text" className="form-control"/>
              </div>
              <div className="form-group">
                  <label>Image URL</label>
                  <input value={formData.image_url} onChange={handleChange} name="image_url" type="text" className="form-control"/>
              </div>						
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
                  <p className='error' id='error'>{state.error}</p>
                <input type="submit" className="btn btn-info" value="Save"/>
                <Link to={`/plant`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
              </div>
            </form>
            </div>
      </div>);
        
  }
  export default CreatePlant;

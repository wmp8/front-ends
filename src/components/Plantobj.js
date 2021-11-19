// list of created plants, plant can be deleted seleted to show details, update
// 
import React, {useState, useEffect} from "react";
import './plantObj.css'
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";

const Plantobj = ({ plants, getPlant, updatePlants}) => {
    const navigate = useNavigate()
    const [newPlants, setNewPlants] = useState('');

    const handleDetailClick = (id) => {
        getPlant(id)
        navigate('/plant')
        
    }
    const handleDelete = (id) => {
        axiosWithAuth()
        .delete(`/plants/delete/${id}`)
        .then(resp=> {
            navigate('/plantobj');
            updatePlants()
            setNewPlants(resp.data)
         })
        .catch(err=> {
        console.log(err);
        })
    }
    return (
        <>
        <h1>Your Plants</h1>
        <section>
        {
            plants ? plants.map((plant) => (
                <div className='card' key={plant.nickname}>
                    <img src={plant.image_url} alt={plant.nickname}/> 
                    <h3>{plant.nickname}</h3>

                    <button className='cardButton'onClick={() => handleDetailClick(plant.plant_id)}>Details</button>
                    <button className='cardButton' onClick={() => handleDelete(plant.plant_id)}>Delete</button>
                </div>
            )) : null
        }
        </section>
        </>
    )

}

export default Plantobj
// list of created plants, plant can be deleted seleted to show details, update
// 
import React, {useState, useEffect} from "react";
import './plantObj.css'
import { useNavigate } from 'react-router-dom';

const Plantobj = ({ plants, getPlant }) => {
    const navigate = useNavigate()

    const handleDetailClick = (id) => {
        getPlant(id)
        navigate('/plant')
    }

    return (
        <>
        <h1>Your Plants</h1>
        <section>
        {
            plants ? plants.map((plant) => (
                <div className='card' key={plant.nickname}>
                    <img src={plant.image_url} alt={plant.nickname}/>

                    <button className='cardButton'onClick={() => handleDetailClick(plant.plant_id)}>Details</button>
                    <button className='cardButton'>Delete</button>
                </div>
            )) : null
        }
        </section>
        </>
    )

}

export default Plantobj
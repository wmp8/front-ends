// list of created plants, plant can be deleted seleted to show details, update
// 
import React, {useState, useEffect} from "react";
import axios from 'axios'
import './plantObj.css'

const Plantobj = ({ plants }) => {

    return (
        <>
        <h1>Your Plants</h1>
        <section>
        {
            plants ? plants.map((plant) => (
                <div className='card' key={plant.nickname}>
                    <img src={plant.image_url} alt={plant.nickname}/>

                    <button className='cardButton'>Details</button>
                    <button className='cardButton'>Delete</button>
                </div>
            )) : null
        }
        </section>
        </>
    )

}

export default Plantobj
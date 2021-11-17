// list of created plants, plant can be deleted seleted to show details, update
// 
import React, {useState} from "react";
import './plantObj.css'


const plantData = [
    {
        "image_url": "/images/marble-pothos.png",
        "light_requirement": "Thrives in medium to low indirect light. Not suited for intense, direct sun.",
        "nickname": "Marble Queen Pothos",
        "plant_id": 1,
        "species": "",
        "user_id": 1,
        "water_frequency": "Water every 1-2 weeks"
    },
    {
        "image_url": "/images/snake-plant.png",
        "light_requirement": "Thrives in medium to bright indirect light, but can tolerate low indirect light.",
        "nickname": "Snake Plant Laurentii",
        "plant_id": 2,
        "species": "",
        "user_id": 1,
        "water_frequency": "Water every 2-3 weeks"
    },
    {
        "image_url": "/images/zz.png",
        "light_requirement": "Thrives in medium to low indirect light. Can tolerate bright indirect light. Not suited for intense, direct sun.",
        "nickname": "ZZ Plant",
        "plant_id": 3,
        "species": "",
        "user_id": 2,
        "water_frequency": "Water every 3-4 weeks"
    },
    {
        "image_url": "/images/ech.png",
        "light_requirement": "Thrives in bright direct light, but can tolerate bright indirect light.",
        "nickname": "Echeveria",
        "plant_id": 4,
        "species": "",
        "user_id": 3,
        "water_frequency": "Water every 3-4 weeks"
    }
]

const Plantobj = () => {

    const [plants, setPlants] = useState(plantData)

    const elements = plants.map((plant) => {
        return (<div>
            <img src={plant.image_url} alt={plant.nickname}/>
            <button>Details</button>
            <button>Delete</button>
        </div>)
    })


    return (
        <>
        <h1>Your Plants</h1>
        <section>
            {elements}
        </section>
        </>
    )

}

export default Plantobj
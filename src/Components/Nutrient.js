import React, { useEffect, useState } from 'react'
import InputNutrient from "./InputNutrient"

function Nutrient() {

    const [foodItem, setFoodItem] = useState("")
    const [calorie, setCalorie] = useState("")
    const [foodList, setFoodList] = useState([])


    // https://developer.edamam.com/edamam-docs-nutrition-api

    useEffect(() => {
        const _foodItem = {
            name: foodItem,
            cal: calorie
        }
        setFoodList([...foodList, _foodItem])
        console.log(foodList)
    },[foodItem])
    
    return (
        <div className="nutrientList">
            <h1>Nutrient</h1>
            <InputNutrient setFoodItem={setFoodItem} setCalorie={setCalorie}/>
            
        </div>
    )
}

export default Nutrient;

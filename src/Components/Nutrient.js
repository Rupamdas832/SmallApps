import React, { useEffect, useState } from 'react'
import InputNutrient from "./InputNutrient"
import "./Nutrient.css"
function Nutrient() {
    const [foodList, setFoodList] = useState([])
    const [total, setTotal] = useState("")
    const [totPer, setTotPer] = useState("")


    // https://developer.edamam.com/edamam-docs-nutrition-api

    const getFood = (food) => {
        setFoodList([...foodList, food])  
    }
    useEffect(() => {
        let list = localStorage.getItem("nutriList");
        if(list){
            setFoodList(JSON.parse(list))
        }   
    },[])

    useEffect(() => {
        localStorage.setItem("nutriList", JSON.stringify(foodList))
        let _total = 0;
        foodList.map(food => {
            _total = _total + food.cal
        })
        let _totPer = _total/20
        setTotal(_total)
        setTotPer(_totPer)
    },[foodList])
    
    return (
        <div className="nutrientList">
            <h1>Nutrient</h1>
            <InputNutrient getFood={getFood}/>
            <div className="meter">
                <span style={{width: `${totPer}%`}}></span>
            </div>
            {foodList && foodList.map((food, index) => {
                return <div>
                    <h1>{food.name}</h1>
                    <h3>{food.cal}</h3>
                </div>
            })}
            <h1>Total :- </h1><h3>{total}</h3>
        </div>
    )
}

export default Nutrient;

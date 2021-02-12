import React, { useEffect, useState } from 'react'
import InputNutrient from "./InputNutrient"
import "./Nutrient.css"
import Heading from "./Heading"
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

    const delBtn = (index) => {
        const selectedItem = foodList[index]
        setFoodList(foodList.filter(item => item!= selectedItem))
    }
    
    return (
        <div className="nutrientList">
            <Heading title="Calorie Tracker" color="green"/>
            <InputNutrient getFood={getFood}/>
            <div className="meter">
                <span style={{width: `${totPer}%`}}>{total}</span>
            </div>
            <div className="foodOutput">
                <div className="foodItem">
                    <p>Food Name</p>
                    <p>Calorie</p>
                    <p>Protein</p>
                    <p></p>
                </div>
                <h1 className="border"></h1>
                {foodList && foodList.map((food, index) => {
                    return <div key={index} className="foodItem">
                        <h1>{food.name}</h1>
                        <h3>{food.cal}</h3>
                        <h3>{food.prot}</h3>
                        <button onClick={() => delBtn(index)} className="foodBtn">Delete</button>
                    </div>
                })}
                <h1 className="border"></h1>
            </div>
            {total && <div className="totalDiv">
            <h3 className="foodTotal">Total Calorie :- </h3><h3>{total}</h3>
            </div>}
        </div>
    )
}

export default Nutrient;

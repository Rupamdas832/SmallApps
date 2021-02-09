import React, {useState} from 'react'

export default function InputGrocery({setFoodItem, setCalorie}) {
    const [foodName, setFoodName] = useState("")

    const addBtnClick = async () => {
        if(foodName === ""){
            return alert("Please enter food name properly")
        }
            const Id = "357c9d12";
            const key = "4c628d74dd7c129964d95c70f5ec0566";
            const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${Id}&app_key=${key}&ingr=${foodName}`)
            const {calories}= await response.json()
            setFoodItem(foodName)
            setCalorie(calories)
        setFoodName("")
    }
    
    return (
            <div className="inputItems">
                <form className="groceryForm">
                    <label>Grocery</label>
                    <input placeholder="Enter food item" className="groceryInputArea grocery" type="text" name="food" value={foodName} onChange={(event) => setFoodName(event.target.value)}/>
                </form> 
                <button onClick={addBtnClick} className="groceryBtn add">Add</button>
                </div>
    )
}

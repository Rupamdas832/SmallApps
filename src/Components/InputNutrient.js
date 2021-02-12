import React, {useState} from 'react'

export default function InputGrocery({getFood}) {
    const [foodName, setFoodName] = useState("")

    const addBtnClick = async () => {
        if(foodName === ""){
            return alert("Please enter food name properly")
        }
            const Id = "357c9d12";
            const key = "4c628d74dd7c129964d95c70f5ec0566";
            const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${Id}&app_key=${key}&ingr=${foodName}`)
            const result = await response.json()
            console.log(result)
            const _foodItem = {
                name: foodName,
                cal: result.calories,
                prot: result.totalDaily.PROCNT.quantity
            }
            getFood(_foodItem)
        setFoodName("")
    }
    
    return (
            <div className="inputItems">
                <form className="groceryForm">
                    <label>Grocery</label>
                    <input placeholder="Enter food item" className="foodInputArea" type="text" name="food" value={foodName} onChange={(event) => setFoodName(event.target.value)}/>
                </form> 
                <button onClick={addBtnClick} className="foodBtn add">Add</button>
                </div>
    )
}

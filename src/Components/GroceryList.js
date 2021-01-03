import React, {useEffect, useState } from 'react'
import Heading from './Heading'
import InputGrocery from './InputGrocery'
import "./GroceryList.css"

export default function GroceryList() {

    const [total, setTotal] = useState("")
    const [groceryList, setGroceryList] = useState([])

    
    const addItem = (item) => {
        setGroceryList([...groceryList, item])
        
    }
    const removeItem = (index) => {
        const theSelectedItem = groceryList[index]
        setGroceryList(groceryList.filter(item => item !== theSelectedItem))
    }
    const clearAll = () => {
        setGroceryList([])
    }
    useEffect(() => {
        const list = localStorage.getItem("groceryList")
        if(list){
            setGroceryList(JSON.parse(list))
        }
    },[])

    useEffect(() => {
        localStorage.setItem("groceryList", JSON.stringify(groceryList))
        let _total = 0;
        groceryList.map(grocery => {
            _total = _total + grocery.price*grocery.quantity
        })
        setTotal(_total)
    },[groceryList])

    return (
        <div className="groceryList">
        <Heading title="Groceries" color="green"/>
            <InputGrocery addItem={addItem}/>
            <div className="groceryOutput">
            <div className="groceryItem">
                <p>Grocery Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p></p>
            </div>
            <h1 className="border"></h1>
            {groceryList.map((item,index) => {
                return <div key={index} className="groceryItem">
                            <h2>{item.name}</h2>
                            <h2>{item.price}</h2>
                            <h2>{item.quantity}</h2>
                            <button onClick={() => removeItem(index)} className="groceryBtn remove">Remove</button>
                </div>
            })}
            <h1 className="border"></h1>
            </div>
            {total && <div className="totalDiv">
                <button onClick={clearAll} className="groceryBtn clearAll">Clear All</button>
                <h1 className="groceryTotal">Total :- {total}</h1>
                </div>}
            <div className="groceryNote">
                    <h4>NOTE: The grocery list does not disappear even the app is closed. You have to manually delete items.</h4>
            </div>
        </div>
    )
}

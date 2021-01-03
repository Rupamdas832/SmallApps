import React, {useState} from 'react'

export default function InputGrocery({addItem}) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")

    const addBtnClick = async () => {
        if(name === ""){
            return alert("Please enter grocery name properly")
        }
        if(price === ""){
            return alert("Please enter grocery price properly")
        }
        if(quantity === ""){
            return alert("Please enter grocery quantity properly")
        }
        const _item = {
            name: name,
            price: price,
            quantity: quantity
        }
        addItem(_item)
        setName("")
        setPrice("")
        setQuantity("")
    }
    return (
            <div className="inputItems">
                <form className="groceryForm">
                    <label>Grocery</label>
                    <input placeholder="Enter grocery item" className="groceryInputArea grocery" type="text" name="food" value={name} onChange={(event) => setName(event.target.value)}/>
                </form> 
                <form className="groceryForm">
                    <label>Price</label>
                    <input placeholder="Enter price" className="groceryInputArea" type="number" name="price" value={price} onChange={(event) => setPrice(event.target.value)}/>
                </form>
                <form className="groceryForm">
                    <label>Quantity</label>
                    <input placeholder="Enter quantity" type="number" name="quantity" className="groceryInputArea" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                </form>
                <button onClick={addBtnClick} className="groceryBtn add">Add</button>
                </div>
    )
}

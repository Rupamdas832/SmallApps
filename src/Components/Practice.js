import React,{useState} from 'react'

export default function Practice() {
    const [bill1, setBill1] = useState();
    const[list, setList] = useState([]);
    const cashReturn = () => {
        setList([...list, {value: bill1}])
        console.log(list)
    }
    return (
        <div>
        <input placeholder="Enter Bill Amount" value={bill1} type="number" onChange={(e) => setBill1(e.target.value)}/>
        <button onClick={cashReturn}>Cash Return</button>
        </div>
    )
}

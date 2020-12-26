import React, { useState } from 'react'
import Heading from './Heading'
import "./LuckyBirthday.css"

export default function LuckyBirthday() {

    const [date,setDate] = useState("")
    const [luckyNumber,setLuckyNumber] = useState("")
    const [lucky, setLucky] = useState(false)
    const [show, setShow] = useState(false)

    const checkLucky = () => {
        let dateNumber = date.replace(/-/g, "")
        let sum = 0;
        while(dateNumber>0){
            sum = sum + dateNumber%10;
            dateNumber = Math.floor(dateNumber/10)
        }
        setShow(true)
        if(sum%luckyNumber === 0){
            setLucky(true)
        }
    }
    const reset = () => {
       setLuckyNumber("")
       setDate("")
       setLucky(false)
       setShow(false)
    }
    return (
        <div className="luckyBirthday">
            <Heading title="Lucky You" color="rgb(0,127,95)"/>
            <h3 className="luckysubheading">Is your Birthday Lucky?</h3>
            <div className="luckyInputs">
                <div className="luckySubInput">
                    <label className="inputLabel">Your Birthday</label>
                    <input type="date" value={date} className="luckyinputArea" onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className="luckySubInput">
                    <label className="inputLabel">Your Lucky Number</label>
                    <input type="number" placeholder="Choose between 0-9" className="luckyinputArea" value={luckyNumber} onChange={(e) => setLuckyNumber(e.target.value)}/>
                </div>
            </div>
            <button onClick={checkLucky} className="luckyBtn">Check</button>
            {show ? (lucky ? <h1>You are Lucky</h1>: <h1>Sorry! You are not Lucky</h1>) : ("") }
            <button onClick={reset} className="luckyBtn reset">Reset</button>
            <div className="note">
                <h4>Don't worry your birthday is not recorded anywhere</h4>
                <h5>App takes your birthday, convert it to a complete number,and then it is checked if the sum of the digits is divisible by lucky number provided.</h5>
            </div>
            </div>
    )
}

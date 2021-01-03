import React, { useState } from 'react'
import Heading from './Heading'
import "./ProfitLoss.css"

function ProfitLoss() {

    const [firstPrice, setFirstPrice] = useState("")
    const [stockNumber, setStockNumber] = useState("")
    const [todayPrice, setTodayPrice] = useState("")
    const [profitPer, setProfitPer] = useState("")
    const [profit, setProfit] = useState("")
    const [negative, setNegative] = useState("rgb(2,62,138)")

    const calculate = (e) => {
        e.preventDefault();
        const cp = firstPrice;
        const sp = todayPrice;
        const diff = sp-cp;
        let _profitPercentage = (diff/cp)*100;
        let _profit = diff*stockNumber;
        setNegative("rgb(85,166,48)")
        if(diff<0){
            setNegative("rgb(239,35,60)")
            _profitPercentage = _profitPercentage*(-1);
            _profit = _profit*(-1)
        }
        setProfitPer(_profitPercentage)
        setProfit(_profit)
    } 

    const reset = () => {
        setFirstPrice("")
        setStockNumber("")
        setTodayPrice("")
        setProfit("")
        setProfitPer("")
        setNegative("rgb(2,62,138)")
    }
    return (
        <div className="profitLoss" style={{backgroundColor: `${negative}`}}>
        <Heading title="Stock Performance" color="orange"/>
            <form className="profitForm">
                <div className="profitSubInput">
                    <label className="profitInputLabel">Buying Price</label>
                    <input placeholder="Purchased Stock Price" className="profitInputArea" value={firstPrice} type="number" onChange={(e) => setFirstPrice(e.target.value)}/>
                </div>
                <div className="profitSubInput">
                    <label className="profitInputLabel">Number of Stocks</label>
                    <input placeholder="Number of stocks" className="profitInputArea" value={stockNumber} type="number" onChange={(e) => setStockNumber(e.target.value)}/>
                </div>
                <div className="profitSubInput">
                    <label className="profitInputLabel">Price Today</label>
                    <input placeholder="Stock Price today"  className="profitInputArea" value={todayPrice} type="number" onChange={(e) => setTodayPrice(e.target.value)}/>  
                </div>
            </form>
            <button onClick={calculate} className="profitBtn">Calculate</button>
            {negative === "rgb(2,62,138)" ? ("") : (<div className="profitOutput">
            {negative === "rgb(85,166,48)" ? (<h1>Profit Amount : ${profit}</h1>) : (<h1>Loss Amount : ${profit}</h1>)}
            {negative === "rgb(85,166,48)" ? (<h1>Profit Percentage : {profitPer}%</h1>) : (<h1>Loss Percentage : {profitPer}%</h1>)}
            </div>)
            }
            <button onClick={reset} className="profitBtn reset">Reset</button>
        </div>
    )
}

export default ProfitLoss

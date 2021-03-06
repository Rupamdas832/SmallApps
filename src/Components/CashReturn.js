import React, { useState } from 'react'
import "./CashReturn.css"
import { connect } from 'react-redux';
import ColorList from './ColorList';
import Heading from './Heading';

const CashReturn = ({theme}) => {

    const themeColor = ColorList[theme];

    const [bill1, setBill1] = useState();
    const [cash, setCash] = useState();
    const [diff, setDiff] = useState("")
    const [freq, setFreq] = useState({})
    const [cashArray, setCashArray] = useState([])
    const a = [1, 5, 10, 20, 100, 500, 2000, 2, 200]

    const cashReturn = (e) => {
       e.preventDefault();
        let amountToGive = parseInt(cash) - parseInt(bill1);
        setDiff(amountToGive)
        a.sort((a,b) => b-a)
        let b = [];
        for(let i=0; i<a.length; i++){
            if(a[i] <= amountToGive){
                b.push(a[i])
                let money = a[i];
                setCashArray(cashArray => [...cashArray, money])
                amountToGive = amountToGive -a[i];
                i = i -1;
            }
        }
        showFrequency();
    }
    const showFrequency = () => {   
        const newObject = {};
        cashArray.map(singleCash => {
            if(newObject[singleCash]){
                newObject[singleCash]++;
            } else {
                newObject[singleCash] = 1
            }
        })
        setFreq(newObject)
    }
    const nextCal = () => {
        setCashArray([]);
        setDiff("")
        setBill1("")
        setCash("")
        setFreq({})
    }
    return (
        <div className="cashReturn" style={{backgroundColor: `${themeColor?.cashReturnBgColor}`, color: `${themeColor?.cashReturnColor}`}}>
        <Heading title="Cash Manager" color="rgb(132,0,50)"/>
        <h3 className="subheading">Enter your <span className="headingSpan">Bill Amount</span> and <span className="headingSpan">Cash</span>. The app will give you the number of notes to return.</h3>
        <form className="cashForm">
            <input placeholder="Bill Amount" className="inputArea" value={bill1} type="number" onChange={(e) => setBill1(e.target.value)}/>
            {bill1 && <input placeholder="Enter Cash"  className="inputArea" value={cash} type="number" onChange={(e) => setCash(e.target.value)}/>}
            {cash && <button onClick={cashReturn} className="cashBtn">Return Amount</button>}
        </form>
        {diff && <h1>Return Amount: ${diff}</h1>}
        {diff && <button onClick={showFrequency} className="cashBtn">Show Currency Notes</button>}
        {diff && <div className="cashOutput">
        {Object.entries(freq).map(([key, value]) => {
            return <h2 className="cashNotes"><span className="notes">{value}</span> notes of <span className="notes">${key}</span></h2>
        })} 
        </div>}
        <button onClick={nextCal} className="cashBtn done">Done</button>
        </div>
    )
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(mapStateToProps)(CashReturn)

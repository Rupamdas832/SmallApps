import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import "./HeroSection.css"

export default function HeroSection() {
    return (
        <div className="heroSection">
            <Heading title="Small Apps" color="rgb(247,127,0)"/>
            <h2>Bunch of apps to play with</h2>
            <div className="heroBtns"> 
                <Link to="/cashmanager"><button className="heroBtn">Cash Manager</button></Link>
                <Link to="/luckybirthday"><button className="heroBtn">Lucky Birthday</button></Link>
                <Link to="/profitloss"><button className="heroBtn">Profit Loss</button></Link>
            </div>
            
        </div>
    )
}

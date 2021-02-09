import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './Heading'
import Footer from "./Footer";
import "./HeroSection.css"
import { connect } from 'react-redux';
import ColorList from './ColorList';

const HeroSection = ({theme}) => {

    const themeColor = ColorList[theme];
    return (
        <div className="heroSection" style={{backgroundColor: `${themeColor?.heroSectionBgColor}`, color: `${themeColor?.heroSectionColor}`}}>
            <Heading title="Small Apps" color="rgb(247,127,0)"/>
            <h2>Bunch of apps to play with</h2>
            <div className="heroBtns"> 
                <Link to="/cashmanager"><button className="heroBtn">Cash Manager</button></Link>
                <Link to="/luckybirthday"><button className="heroBtn">Lucky Birthday</button></Link>
                <Link to="/profitloss"><button className="heroBtn">Profit & Loss</button></Link>
                <Link to="/grocerylist"><button className="heroBtn">Grocery List</button></Link>
                <Link to="/crypto"><button className="heroBtn">Crypto $ Update</button></Link>
                <Link to="/nutrient"><button className="heroBtn">Nutrient Check</button></Link>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    theme: state.theme
})

export default connect(mapStateToProps)(HeroSection)
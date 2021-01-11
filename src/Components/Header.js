import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcFlashOff, FcFlashOn } from "react-icons/fc"
import { themeToggler } from '../Redux/Action'
import { connect } from 'react-redux'

const Header = ({themeToggler}) => {

    const [mode , setMode] = useState("dark")

    const themeChange = () => {
        if(mode === "light"){
            setMode("dark")
        }
        else {
            setMode("light")
        }
        themeToggler(mode)
    }
    return (
        <div className="header">
            <Link to="/" className="headerLink"><h3>Rupam Das</h3></Link>
            <Link to="/" className="headerLink">HOME</Link>
            <button onClick={themeChange}><h1>{mode === "light" ? (<FcFlashOn/>) : (<FcFlashOff/>)}</h1></button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    themeToggler : mode => {
        dispatch(themeToggler(mode))
    }
})

export default connect(null, mapDispatchToProps)(Header)
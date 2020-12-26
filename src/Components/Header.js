import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link to="/" className="headerLink"><h3>Rupam Das</h3></Link>
            <Link to="/" className="headerLink">HOME</Link>
        </div>
    )
}

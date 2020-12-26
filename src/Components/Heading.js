import React from 'react'

function Heading({title, color}) {
    return (
        <div className="heading">
            <h3 style={{color: `${color}`}}>{title}</h3>
        </div>
    )
}

export default Heading

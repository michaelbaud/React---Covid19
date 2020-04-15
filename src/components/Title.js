import React from 'react'

import logo from '../img/image4.png'

const Title = () => {
    return (
        <div className="titleContainer">
            <img className="logo" src={logo} alt="Logo Covid-19" />
            <h1 className="title">Les chiffres du COVID-19 par pays</h1>
        </div>
    )
}

export default Title
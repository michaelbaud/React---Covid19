import React from 'react'

import Card from './Card'

const Cards = (props) => {

    return (

        <Card
            globalStats={props.globalStats}
            focusStats={props.focusStats}
            focusCountry={props.focusCountry}
        />

    )
}

export default Cards
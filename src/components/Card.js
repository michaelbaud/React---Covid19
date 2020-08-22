import React, { useState } from 'react'

// Dependencies
import Expand from 'react-expand-animated'

// Helpers
import translate from '../helpers/translate'

const Card = ({ dataForOneCard, title }) => {

    const [openDiv, setOpenDiv] = useState(false)

    const renderItemsList = dataForOneCard.map((item, index) => {
        if (translate.hasOwnProperty(item[0])) {
            return <li key={index}>{translate[item[0]]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
        else {
            return <li key={index}>{index + 1} - {item[0]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
    })

    return (
        <div className="columnContainer">
            <button
                className={`is-primary is-rounded ${openDiv && 'buttonFocused'}`}
                onClick={() => setOpenDiv(prevState => !prevState)}
            >
                {title}
            </button>
            <Expand open={openDiv} duration={200}>
                <ul className="ulSorted">
                    {renderItemsList}
                </ul>
            </Expand>
        </div >
    )
}

export default Card
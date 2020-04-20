import React, { useState } from 'react'

// Dependencies
import Expand from 'react-expand-animated'

// Helpers
import translate from '../helpers/translate'

const SortedDeaths = ({ sortedDeaths }) => {

    const [buttonIsFocused, setButtonIsFocused] = useState(false)
    const [openDiv, setOpenDiv] = useState(false);

    const toggleButton = () => {
        const buttonDeaths = document.querySelector("#buttonDeaths")
        if (!buttonIsFocused) {
            buttonDeaths.classList.add("buttonFocused")
            setButtonIsFocused(true)
        } else {
            buttonDeaths.classList.remove("buttonFocused")
            setButtonIsFocused(false)
        }
        setOpenDiv(prevState => !prevState)
    }

    const renderDeaths = sortedDeaths.map((item, index) => {
        if (translate.hasOwnProperty(item[0])) {
            return <li key={index}>{translate[item[0]]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
        else {
            return <li key={index}>{index + 1} - {item[0]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
    })

    return (
        <div className="columnContainer">
            <button id="buttonDeaths" className="is-primary is-rounded" onClick={toggleButton} type="submit">Décès total</button>
            <Expand open={openDiv} duration={600}>
                <ul className="ulSorted">
                    {renderDeaths}
                </ul>
            </Expand>
        </div >
    )
}

export default SortedDeaths
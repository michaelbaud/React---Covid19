import React, { useState } from 'react'

// Dependencies
import Expand from 'react-expand-animated'


// Helpers
import translate from '../helpers/translate'

const SortedCases = ({ sortedCases }) => {

    const [buttonIsFocused, setButtonIsFocused] = useState(false)
    const [openDiv, setOpenDiv] = useState(false);

    const toggleButton = () => {
        const buttonCases = document.querySelector("#buttonCases")
        if (!buttonIsFocused) {
            buttonCases.classList.add("buttonFocused")
            setButtonIsFocused(true)
        } else {
            buttonCases.classList.remove("buttonFocused")
            setButtonIsFocused(false)
        }
        setOpenDiv(prevState => !prevState)
    }

    const renderCases = sortedCases.map((item, index) => {
        if (translate.hasOwnProperty(item[0])) {
            return <li key={index}>{translate[item[0]]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
        else {
            return <li key={index}>{index + 1} - {item[0]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
    })

    return (
        <div className="columnContainer">
            <button id="buttonCases" className="is-primary is-rounded" onClick={toggleButton} type="submit">Cas déclarés</button>
            <Expand open={openDiv} duration={600}>
                <ul className="ulSorted">
                    {renderCases}
                </ul>
            </Expand>
        </div >
    )
}

export default SortedCases
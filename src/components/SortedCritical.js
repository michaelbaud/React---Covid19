import React, { useState } from 'react'

// Dependencies
import Expand from 'react-expand-animated'


// Helpers
import translate from '../helpers/translate'

const SortedCritical = ({ sortedCritical }) => {

    const [buttonIsFocused, setButtonIsFocused] = useState(false)
    const [openDiv, setOpenDiv] = useState(false);

    const toggleButton = () => {
        const buttonCritical = document.querySelector("#buttonCritical")
        if (!buttonIsFocused) {
            buttonCritical.classList.add("buttonFocused")
            setButtonIsFocused(true)
        } else {
            buttonCritical.classList.remove("buttonFocused")
            setButtonIsFocused(false)
        }
        setOpenDiv(prevState => !prevState)
    }

    const renderCritical = sortedCritical.map((item, index) => {
        if (translate.hasOwnProperty(item[0])) {
            return <li key={index}>{translate[item[0]]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
        else {
            return <li key={index}>{index + 1} - {item[0]} : <span className="nb">{item[1].toLocaleString()}</span></li>
        }
    })

    return (
        <div className="columnContainer">
            <button id="buttonCritical" className="is-primary is-rounded" onClick={toggleButton} type="submit">Cas critiques</button>
            <Expand open={openDiv} duration={600}>
                <ul className="ulSorted">
                    {renderCritical}
                </ul>
            </Expand>
        </div >
    )
}

export default SortedCritical
import React, { useState, useEffect } from 'react'

// Helpers
import translate from '../helpers/translate'

const Select = ({ handleChange, setErrorStatus }) => {

    const [countriesArray, setCountriesArray] = useState([])

    const getCountriesArray = async () => {
        try {
            let response = await fetch("https://corona.lmao.ninja/countries/")
            const newCountriesArray = [...countriesArray]
            const data = await response.json()
            await data.forEach(item => {
                if (translate.hasOwnProperty(item.country)) {
                    newCountriesArray.push(translate[item.country])
                } else {
                    console.error('Ce pays n\'est pas inclus dans traduction:', item.country)
                    newCountriesArray.push(item.country)
                }
                newCountriesArray.sort((a, b) => {
                    return a.localeCompare(b)
                })
            })
            newCountriesArray.unshift('Monde')
            setCountriesArray(newCountriesArray)
        } catch (err) {
            console.error('getCountriesArray', err, err.stack)
            setErrorStatus(true)
        }
    }

    useEffect(() => {
        getCountriesArray()
    }, [])

    const optionItems = countriesArray.map((item, index) =>
        item === "Monde" ? <option defaultValue key={index}>{item}</option> : <option key={index}>{item}</option>
    )

    return (
        <div className="field has-addons has-addons-centered">
            <div className="control">
                <div className="select is-primary custom-select">
                    <select onChange={handleChange}>
                        {optionItems}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Select

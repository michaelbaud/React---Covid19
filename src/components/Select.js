import React, { useState, useEffect } from 'react'

// Helpers
import translate from '../helpers/translate'

const Select = ({ setFocusCountry, setErrorStatus }) => {

    const [countriesArray, setCountriesArray] = useState([])

    useEffect(() => {
        const getCountriesArray = async () => {
            try {
                let response = await fetch("https://corona.lmao.ninja/v2/countries/")
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
        getCountriesArray()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (e) => {
        let target = e.target.value
        for (let [key, value] of Object.entries(translate)) {
            if (value === target) {
                target = key
            }
        }
        setFocusCountry(target)
    }

    const renderOptionItems = countriesArray.map((item, index) =>
        item === "Monde" ? <option defaultValue key={index}>{item}</option> : <option key={index}>{item}</option>
    )

    return (
        <div className="field has-addons has-addons-centered">
            <div className="control">
                <div className="select is-primary custom-select">
                    <select onChange={handleChange}>
                        {renderOptionItems}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Select

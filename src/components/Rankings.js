import React, { useState, useEffect } from "react"

// Components
import SortedCases from './SortedCases'
import SortedDeaths from './SortedDeaths'
import SortedCritical from './SortedCritical'

const Rankings = ({ windowIsFocused }) => {

    const [casesArray, setCasesArray] = useState([])
    const [deathsArray, setDeathsArray] = useState([])
    const [criticalArray, setCriticalArray] = useState([])

    useEffect(() => {
        if (windowIsFocused) {
            console.log('page active : ', windowIsFocused)
            fetchApi()
        }
    }, [windowIsFocused])

    const fetchApi = async () => {
        try {
            const response = await fetch("https://corona.lmao.ninja/v2/countries/")
            const data = await response.json()
            const newCasesArray = []
            const newDeathsArray = []
            const newCriticalArray = []
            await data.forEach(item => {
                newCasesArray.push([item.country, item.cases])
                newDeathsArray.push([item.country, item.deaths])
                newCriticalArray.push([item.country, item.critical])
            })
            newCasesArray.sort((a, b) => {
                return a[1] - b[1]
            }).reverse()
            newDeathsArray.sort((a, b) => {
                return a[1] - b[1]
            }).reverse()
            newCriticalArray.sort((a, b) => {
                return a[1] - b[1]
            }).reverse()

            setCasesArray(newCasesArray)
            setDeathsArray(newDeathsArray)
            setCriticalArray(newCriticalArray)
        } catch (err) {
            console.error("Error fetchApi", err.stack)
        }
    }

    return (
        <div className='rankingsContainer'>
            <h2 className="title">Classements par catégories</h2>
            <div className="columnsContainer">
                <SortedCases casesArray={casesArray} />
                <SortedDeaths deathsArray={deathsArray} />
                <SortedCritical criticalArray={criticalArray} />
            </div>
        </div>
    )
}

export default Rankings

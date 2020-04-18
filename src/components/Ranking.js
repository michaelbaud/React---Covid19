import React, { useState, useEffect } from "react"

// Components
import SortedCases from './SortedCases'

const App = () => {
    const [sortedCases, setSortedCases] = useState([])
    const [sortedDeayhs, setSortedDeaths] = useState([])
    const [sortedCritical, setSortedCritical] = useState([])

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        try {
            const response = await fetch("https://corona.lmao.ninja/v2/countries/")
            const data = await response.json()
            const newSortedCases = []
            const newSortedDeaths = []
            const newSortedCritical = []
            await data.forEach(item => {
                newSortedCases.push([item.country, item.cases])
                newSortedDeaths.push([item.country, item.deaths])
                newSortedCritical.push([item.country, item.critical])
            })
            newSortedCases.sort((a, b) => {
                return a[1] - b[1]
            })
            newSortedDeaths.sort((a, b) => {
                return a[1] - b[1]
            })
            newSortedCritical.sort((a, b) => {
                return a[1] - b[1]
            })
            newSortedCases.reverse()
            newSortedDeaths.reverse()
            newSortedCritical.reverse()
            setSortedCases(newSortedCases)
            setSortedDeaths(newSortedDeaths)
            setSortedCritical(newSortedCritical)

        } catch (err) {
            console.error("Error fetchApi", err.stack)
        }
    }

    return (
        <div className='rankingsContainer'>
            <h2 className="title">Classements par catégories</h2>
            <SortedCases sortedCases={sortedCases} />
        </div>
    )
}

export default App

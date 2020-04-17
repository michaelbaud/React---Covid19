import React, { useState, useEffect } from "react"

const App = () => {
    const [sortedCases, setSortedCases] = useState([])
    const [sortedTodayCases, setSortedTodayCases] = useState([])

    useEffect(() => {
        fetchApi()
    }, [])

    const fetchApi = async () => {
        try {
            const response = await fetch("https://corona.lmao.ninja/countries/")
            const data = await response.json()
            const newSortedCases = []
            const newSortedTodayCases = []
            await data.forEach(item => {
                newSortedCases.push([item.country, item.cases])
                newSortedTodayCases.push([item.country, item.todyCases])
            })
            newSortedCases.sort((a, b) => {
                return a[1] - b[1]
            })
            newSortedTodayCases.sort((a, b) => {
                return a[1] - b[1]
            })
            newSortedCases.reverse()
            newSortedTodayCases.reverse()
            setSortedCases(newSortedCases)
            setSortedTodayCases(newSortedCases)
            console.log(newSortedCases)
        } catch (err) {
            console.error("Error fetchApi", err.stack)
        }
    }

    const renderCases = sortedCases.map((item, index) => <li>{item[0]} : {item[1]}</li>)
    const renderTodayCases = sortedTodayCases.map((item, index) => <li key={index}>{item[0]} : {item[1]}</li>)

    return (
        <div className='rankingsContainer'>
            <h2 className="title">Classement par catégories</h2>
            <div>
                <button className="button is-primary is-rounded" type="submit">Cas aujourd'hui</button>
                <ul>
                    {/*renderCases*/}
                    {renderTodayCases}
                </ul>
            </div>

        </div>
    )
}

export default App

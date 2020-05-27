import React, { useState, useEffect } from "react"

// Components
import Card from './Card'

const Rankings = ({ windowIsFocused }) => {

    const [dataForAllCard, setDataForAllCard] = useState({})

    useEffect(() => {
        if (windowIsFocused) {
            fetchApi()
        }
    }, [windowIsFocused])

    const fetchApi = async () => {
        try {
            const response = await fetch("https://corona.lmao.ninja/v2/countries/")
            const data = await response.json()
            const newdataForAllCard = { casesArray: [], deathsArray: [], criticalArray: [] }
            await data.forEach(item => {
                newdataForAllCard.casesArray = [...newdataForAllCard.casesArray, [item.country, item.cases]]
                newdataForAllCard.deathsArray = [...newdataForAllCard.deathsArray, [item.country, item.deaths]]
                newdataForAllCard.criticalArray = [...newdataForAllCard.criticalArray, [item.country, item.critical]]
            })

            for (const dataCard in newdataForAllCard) {
                newdataForAllCard[dataCard].sort((a, b) => {
                    return a[1] - b[1]
                }).reverse()
            }

            setDataForAllCard(newdataForAllCard)
        } catch (err) {
            console.error("Error fetchApi", err.stack)
        }
    }

    return (
        <div className='rankingsContainer'>
            <h2 className="title">Classements par catégories</h2>
            <div className="columnsContainer">
                {dataForAllCard.casesArray && <Card dataForOneCard={dataForAllCard.casesArray} title={'Cas déclarés'} />}
                {dataForAllCard.deathsArray && <Card dataForOneCard={dataForAllCard.deathsArray} title={'Décès total'} />}
                {dataForAllCard.criticalArray && <Card dataForOneCard={dataForAllCard.criticalArray} title={'Cas critiques'} />}
            </div>
        </div>
    )
}

export default Rankings

import React from 'react'
import { TiMediaPlay } from "react-icons/ti"

const Card = (props) => {

    for (let i in props.globalStats) {
        props.globalStats[i] = props.globalStats[i].toLocaleString()
    }

    for (let i in props.focusStats) {
        props.focusStats[i] = props.focusStats[i].toLocaleString()
    }

    const renderGlobalStats = (
        <ul>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.globalStats.cases}</span> cas</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.globalStats.deaths}</span> morts</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.globalStats.recovered}</span> guéris</li>
        </ul>
    )

    const renderFocusStats = (
        <ul>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.focusStats.cases}</span> cas déclarés</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.focusStats.todayCases}</span> cas déclarés aujourd'hui</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.focusStats.deaths}</span> morts</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.focusStats.todayDeaths}</span> morts aujourd'hui</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.focusStats.recovered}</span> guéris</li>
            <li><TiMediaPlay className="listIcon" /> <span className="nb">{props.focusStats.critical}</span> cas critiques</li>
        </ul>
    )

    if (props.focusCountry === "Monde") {
        return (
            <div>
                {renderGlobalStats}
            </div>
        )
    } else {
        return (
            <ul>
                {renderFocusStats}
            </ul>
        )
    }
}

export default Card
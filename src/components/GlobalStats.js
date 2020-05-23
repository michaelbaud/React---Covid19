import React from 'react'

// React icon
import { TiMediaPlay } from "react-icons/ti"

const GlobalStats = ({ globalStats }) => {

    const formatNumToLocalString = (num) => {
        return num.toLocaleString()
    }

    return (
        <div className="card">
            <ul>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(globalStats.cases)}</span> cas déclarés</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(globalStats.todayCases)}</span> cas déclarés aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(globalStats.deaths)}</span> décès</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(globalStats.todayDeaths)}</span> décès aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(globalStats.recovered)}</span> cas guéris</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(globalStats.critical)}</span> cas critiques</li>
            </ul>
        </div>
    )
}

export default GlobalStats
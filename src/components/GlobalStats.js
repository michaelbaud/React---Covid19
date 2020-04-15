import React from 'react'

// React icon
import { TiMediaPlay } from "react-icons/ti"

const GlobalStats = ({ globalStats }) => {

    const formatGlobalData = {
        cases: globalStats.cases.toLocaleString(),
        todayCases: globalStats.todayCases.toLocaleString(),
        deaths: globalStats.deaths.toLocaleString(),
        todayDeaths: globalStats.todayDeaths.toLocaleString(),
        recovered: globalStats.recovered.toLocaleString(),
        critical: globalStats.critical.toLocaleString()
    }

    const renderGlobalStats = (
        <div className="card">
            <ul>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatGlobalData.cases}</span> cas déclarés</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatGlobalData.todayCases}</span> cas déclarés aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatGlobalData.deaths}</span> morts</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatGlobalData.todayDeaths}</span> morts aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatGlobalData.recovered}</span> guéris</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatGlobalData.critical}</span> cas critiques</li>
            </ul>
        </div>
    )

    return (
        <div>
            {renderGlobalStats}
        </div>
    )
}

export default GlobalStats
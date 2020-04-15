import React from 'react'

// React icon
import { TiMediaPlay } from "react-icons/ti"

const FocusStats = ({ focusStats }) => {

    const formatFocuslData = {
        cases: focusStats.cases.toLocaleString(),
        todayCases: focusStats.todayCases.toLocaleString(),
        deaths: focusStats.deaths.toLocaleString(),
        todayDeaths: focusStats.todayDeaths.toLocaleString(),
        recovered: focusStats.recovered.toLocaleString(),
        critical: focusStats.critical.toLocaleString()
    }

    const renderFocusStats = (
        <div className="card">
            <img className="imgFlag" src={focusStats.countryInfo.flag} alt="Drapeau" />
            <ul>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatFocuslData.cases}</span> cas déclarés</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatFocuslData.todayCases}</span> cas déclarés aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatFocuslData.deaths}</span> décès</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatFocuslData.todayDeaths}</span> décès aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatFocuslData.recovered}</span> cas guéris</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatFocuslData.critical}</span> cas critiques</li>
            </ul>
        </div>
    )

    return (
        <div>
            {renderFocusStats}
        </div>
    )
}

export default FocusStats
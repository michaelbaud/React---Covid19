import React from 'react'

// React icon
import { TiMediaPlay } from "react-icons/ti"

const FocusStats = ({ focusStats }) => {

    const formatNumToLocalString = (num) => {
        return num.toLocaleString()
    }

    return (
        <div className="card">
            <div className="imgFlagContainer">
                <img className="imgFlag" src={focusStats.countryInfo.flag} alt="Drapeau" />
            </div>
            <ul>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(focusStats.cases)}</span> cas déclarés</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(focusStats.todayCases)}</span> cas déclarés aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(focusStats.deaths)}</span> décès</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(focusStats.todayDeaths)}</span> décès aujourd'hui</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(focusStats.recovered)}</span> cas guéris</li>
                <li><TiMediaPlay className="listIcon" /> <span className="nb">{formatNumToLocalString(focusStats.critical)}</span> cas critiques</li>
            </ul>
        </div>
    )
}

export default FocusStats
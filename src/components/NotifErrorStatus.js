import React from 'react'

const NotifErrorStatus = ({ errorStatus, focusCountry }) => {

    const spanStyle = {
        border: '2px solid #fff',
        padding: '3px 5px',
        margin: '0 5px',
        borderRadius: '8px'
    }

    if (errorStatus) {
        return (
            <div>
                <div className="notification is-danger is-inline-block">
                    <p><strong>Les données pour <span style={spanStyle}>{focusCountry}</span> sont indisponibles pour le moment</strong></p>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default NotifErrorStatus
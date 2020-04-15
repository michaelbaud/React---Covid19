import React from 'react'

const NotifErrorStatus = ({ errorStatus }) => {

    if (errorStatus) {
        return (
            <div>
                <div className="notification is-danger is-inline-block">
                    <p><strong>L'API est indisponible pour le moment</strong></p>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default NotifErrorStatus
import React from 'react'
import './NotificationItem.css';

function NotificationItem({ message, type}) {

    return (
        <div className={`notification__item ${type}`}>
            {message}
        </div>
    )
}

export default NotificationItem
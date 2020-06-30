import React from 'react'
import { useHistory } from 'react-router-dom'
const NotFound = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/")
    }
    return (
        <div className="container">
            <div className="center-align">
                <h1>404 error</h1>
                <p> sorry, this page was not found </p>
                <div className="btn-large  yellow darken-4 hoverable" onClick={handleClick}> back ...</div>
            </div>

            
        </div>
    )
}

export default NotFound

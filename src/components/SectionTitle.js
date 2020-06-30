import React from 'react'

const SectionTitle = ({title, subtitle }) => {
    return (
        <div className="container valign-wrapper">
        <div className="row">
            <h4 className="col s12  center-align ">{title}</h4> 
            <h6 className="col s12 center-align lighten-5">{subtitle}</h6>                       

        </div>
        </div>
    )
}

export default SectionTitle

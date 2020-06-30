import React from 'react'

const Loading = () => {
    return (
    <div className="container" style={{ display:'flex', alignItems:'center',justifyContent:'center', marginTop:'15%'}}>
        <div className="align-center">

        <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-yellow-only">
                <div className="circle-clipper left" >
                    <div className="circle "></div>
            
            </div>
            </div>
        </div>

        </div>

    </div>

    )
}

export default Loading

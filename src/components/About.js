import React from 'react'

const About = () => {
    return (


        <div className="container yellow darken-4" style={{marginTop:'5rem'}}>

            <div className="row valign-wrapper" style={{padding:'40px'}}>
                <div className="col s12  push-l2">
                    <img src={require('../components/george.jpg')} alt="george.jpg"  className="circle responsive-img" style={{width:'50%', height:'50%', opacity:'0.8'}} />
                </div>
                <div className="col s12 m6">
                    <h3 className="white-text"> Cat Finder  </h3>
                    <div className="divider"></div>
                        <h5 className="align-center white-text">cat breeds reference app </h5>
                        <p className="white-text">
                            made with React JS , <br/>
                            routes made with React Router Dom <br/>
                            styled with Materialize css 
                            <br/>   
                            ℗ 2020 Athens , Greece by George Manikas
                        <br></br>

                        </p>
                        <div>
                                
                        <a href="/" className="white-text btn yellow darken-2 white-text "
                
                        style={{marginTop:'20px', cursor:'pointer' }}> Home </a> 
                        </div>
                    

                </div>
            </div>

        </div>
    )
}

export default About

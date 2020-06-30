import React, { useEffect, useContext } from 'react';
import CatContext from '../Catcontext/CatContext';
import M from 'materialize-css'

const ParallaxImage = () => {
    const [value,dispatch] = useContext(CatContext)
    const { images } = value;
    // initializes parallax effect upon render
    useEffect(()=>{
        var parallax = document.querySelectorAll('.parallax')
        M.Parallax.init(parallax,{})
    },[])
    return (
        <div className="parallax-container">
            <div className="parallax"><img src={images[Math.floor(Math.random()*15 )]} alt="img" /> </div>
        </div>
    )
}

export default ParallaxImage

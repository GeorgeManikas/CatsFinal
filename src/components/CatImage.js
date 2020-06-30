

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import M from 'materialize-css'
const CatImage = ({ id }) => {
    const [currentImage, setCurrentImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const fetchImage = async () => {
        const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${id}&include_breeds=false`
        const fetchImage = await  axios.get(URL)
        
        setCurrentImage(fetchImage.data[0].url)
    } 
    useEffect(() => {
        setIsLoading(true)
        fetchImage()
        setIsLoading(false)
        var elems = document.querySelectorAll('.materialboxed');
     M.Materialbox.init(elems, {});
  
    }, [])
    if (isLoading || currentImage === '')  return <div> ...loading ... </div>

    return (
        <>
        <img src={currentImage} alt={id}  style={{ width:'100%'}} className="materialboxed" />
</>

    )
        
}

export default CatImage

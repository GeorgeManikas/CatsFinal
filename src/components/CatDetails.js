

import React, { useContext, useState, useEffect } from 'react';
import CatContext from '../Catcontext/CatContext';
import { SET_CURRENT_BREED } from '../Catcontext/types'
import Rate from '../components/Rate'
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import M from 'materialize-css'


const CatDetails = () => {

    const { cat_id } = useParams()
    const [value, dispatch] = useContext(CatContext)
    const [currentBreed, setCurrentBreed] = useState([])
    const [currentImage, setCurrentImage] = useState('')

    // set current breed state
    const setCurrent = async () => {
        const breedMatched = await value.breeds.filter(breed => breed.id === cat_id)
        setCurrentBreed(breedMatched[0])
         dispatch({ type: SET_CURRENT_BREED, payload: breedMatched[0] })

    }


    // create the rates for each breed 
    const ratesArray = []
    Object.entries(currentBreed).forEach(element => {
        if (Number.isInteger(element[1]) && element[1] !== 0) {
            ratesArray.push([element[0], element[1]])
        }
    });


    // fetch for image of the current breed and returns it's url
    const fetchBreedImage = async () => {
        const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${cat_id}&include_breeds=false`
        fetch(URL).then(res=>{return res.json()}).then(data => setCurrentImage(data[0].url))
        

    }



    // characteristics array 
    useEffect(() => {
        setCurrent();
        fetchBreedImage();
        var elems = document.querySelectorAll('.materialboxed');
         M.Materialbox.init(elems, {});
    }, [])




    if (!currentBreed) return <Loading />


    // main 
    return (
        <div className="container ">
            <div className="details yellow darken-4 align-center">
                <h3 className="white-text center-align"> {currentBreed.name} </h3>
                <div className="container">
                    <div className="row">
                        <div className="card-horizontal" style={{ padding: '40px' }}>
                            <div className="col s12 m4 l6">
                                <div className="card-image"> <img src={currentImage} alt={currentImage} className="detail-image responsive-image materialboxed"/></div>
                            </div>
                            <div className="col s12 m6 l6 push-m2">
                                <div className="card-content">
                                    <div className="row">
                                        <p className="white-text flow-text" style={{ paddingLeft: '2em' }}>{currentBreed.description}</p>
                                    </div>
                                    <div className="row">
                                    <p className="white-text center-align"> {currentBreed.name}  lives about {currentBreed.life_span} years </p>
                                        <h6 className="white-text center-align"> Main characteristics</h6>
                                    </div>
                                    <div className="row align-center">
                                        {ratesArray.map((v, i) => (
                                            <div className="col s6" key={i}>

                                                <Rate description={v[0].toUpperCase().replace('_', ' ')} rate={v[1]} />

                                            </div>
                                        ))}


                                    </div>

                                </div>

                            </div>
                        </div>

                            <div className="row">
                        <div className="col s12">

                            <a className="btn yellow darken-2 align-right" href="/"> Home Page </a>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatDetails

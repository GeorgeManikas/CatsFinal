import React, { useContext, useEffect, useState } from "react";
import CatContext from "../Catcontext/CatContext";
import Paginate from './Paginate'
import { FETCH_BREEDS } from "../Catcontext/types";

import axios from "axios";
import CatCard from "./CatCard";


const CatBreedsList = () => {
  const [value, dispatch] = useContext(CatContext);
  const [loading, setIsLoading] = useState(false);
  const [breedsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1)
  const fetchCatsData = async  () => {
    setIsLoading(true);
    const breeds = await  axios.get("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": "006b067d-6a37-4786-8052-8a81b43d0235",
      },
    });
    dispatch({ type: FETCH_BREEDS, payload: breeds.data });
    setIsLoading(false);
  };

  // set pagination constants
  const indexOfLastBreed = currentPage * breedsPerPage 
  const indexOfFirstBreed = indexOfLastBreed - breedsPerPage
  const currentBreeds = value.breeds.slice(indexOfFirstBreed, indexOfLastBreed)


  // change current page 
  const paginate = (numPage) => {
    setCurrentPage(numPage)
  }

  // fetch asynchronously cats data on component render 
  useEffect(() => {
    fetchCatsData();
  }, []);

  if (loading) {
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <CatCard breeds={currentBreeds} /> 
        </div>
        <div className="row">

          <Paginate breedsPerPage={breedsPerPage} totalBreeds={value.breeds.length} paginate={paginate} currentPage={currentPage}/>
        </div>
          
        </div>

           
            
            

            
            

            
            
     
      
    );
  }
};

export default CatBreedsList;

import React, { useEffect,  useContext} from "react";
import CatContext from '../Catcontext/CatContext';
import { FETCH_IMAGES } from '../Catcontext/types';
import M from "materialize-css";
import axios from "axios";


const HeroImage = (props) => {
  const [value,dispatch] = useContext(CatContext)
  
  
  // initializes carousel
  useEffect(() => {
    var slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, {
      indicators: true,
      height: 370,
      duration: 1000,
      interval: 6000,
    });
    
    const fetchCatImages = async () => {
      // asyncronous fetch with axios
      let imgArray =[];
      try {
        const imgs = await axios.get(
          "https://pixabay.com/api/?key=15677064-e91d12ad55b41f026835f0b8a&q=cats&image_type=photo&min_width=1900&min_height:400&order=popular"
        );
        imgs.data.hits.map((v) => imgArray.push(v.webformatURL));
        const imgArrayA = imgArray.slice(0, 20); // pick first 20
        dispatch({type:FETCH_IMAGES, payload:imgArrayA})
      } catch (err) {
        console.log(err);
      }
    };
    fetchCatImages();
  }, []);


    const { images } = value;
    

    if  ( images.lenght === 0) {
      return(
        <div className="container">
        <div className="progress">
      <div className="indeterminate"></div>
      </div>
  </div>
      )
    }
  return (
    
    <div className="slider">
      <ul className="slides">
        <li>
          <img src={images[0]} alt="not found"/>
          <div className="caption center-align">
            <h3>CatVille</h3>
            <h5 className="bold black-text text-darken-3">
              find the right cat for you...
            </h5>
          </div>
        </li>
        <li>
          <img src={value.images[1]} alt="not found" />
          <div className="caption left-align">
            {/* <h3>CatVille</h3> */}
            <h5 className=" white-text text-darken-3">
             ...is very simple  
            </h5>
          </div>
        </li>
        <li>
          <img src={value.images[2]} alt="not found"/>
          <div className="caption right-align">
            {/* <h3>CatVille</h3> */}
            <h5 className="black-text text-lighten-1">
              ...choose what character your cat wants to have 
            </h5>
          </div>
        </li>
        <li>
          <img src={value.images[3]} alt="not found"/>
          <div className="caption center-align">
            {/* <h3>CatVille</h3> */}
            <h5 className="light grey-text text-lighten-1">
              and search among the most suitable cat breeds for you...
            </h5>
          </div>
        </li>
        <li>
          <img src={value.images[4]} alt="not found" />
          <div className="caption left-align">
            {/* <h3>CatVille</h3> */}
            <h5 className="black-text text-lighten-1">
              finding the perfect cat isn't as hard as it seems !!!
            </h5>
          </div>
        </li>
       
      </ul>
    </div>
  );
};

export default HeroImage;

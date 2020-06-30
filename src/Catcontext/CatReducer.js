import {
  FETCH_BREEDS,
  FETCH_IMAGES,
  FETCH_BREED_IMAGES,
  SET_CURRENT_BREED
} from "./types";





export const catReducer = (state, action) => {

  

  
  switch (action.type) {
    case FETCH_BREEDS: //fetch all breeds
      return {
        ...state,
        breeds: action.payload
      };
    case FETCH_IMAGES: // store images to use with parallax and hero containers 
      return {
        ...state,
        images: action.payload
      }
    case FETCH_BREED_IMAGES:
       return {
        ...state,
        breeds_images: action.payload,
      }
    case SET_CURRENT_BREED:
      return {
        ...state, 
        current: action.payload
      }

    default:
      return;
  };
}
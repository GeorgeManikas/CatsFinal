import React, { useReducer } from "react";
import CatContext from "./CatContext";
import { catReducer } from "./CatReducer";
const CatState = ({ children }) => {
  // state initialize. add fields as needed
  const initialState = {
    breeds: [], // all the breeds 
    images: [], // image list via Pixabay API to show a hero-image and parallax divs 
    current: {}
  };

  const [catvalue, dispatch] = useReducer(catReducer, initialState);

  return (
    <CatContext.Provider value={[catvalue, dispatch]}>
      {children}
    </CatContext.Provider>
  );
};

export default CatState;

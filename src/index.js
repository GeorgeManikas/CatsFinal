import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import CatState from "./Catcontext/CatState";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CatState>
    <BrowserRouter>
      <App />
    </BrowserRouter>      

    </CatState>
  </React.StrictMode>,
  rootElement
);

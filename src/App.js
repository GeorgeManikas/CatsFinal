/* eslint-disable */ 

import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainPage from './components/MainPage'
import CatDetails from './components/CatDetails'
import NotFound from './components/NotFound'
import About from "./components/About";

export default function App() {
  return (
    <div className="app">


     


      {/* Main Routes  */}
      <Switch>
        <Route exact path="/">
         {/* Nav Bar  */}
      <section className="nav-section" id="nav-section"></section>
      <NavBar />
          <MainPage />
        </Route>

        <Route exact path="/details/:cat_id" render={(props)=> <CatDetails {...props} rate={props.rate}/>} />
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path="/" component={NotFound} />
      </Switch>




    </div>
  );
}

import React from 'react';
import HeroImage from "./HeroImage";
import CatBreedsList from "./CatBreedsList";
import CatDetails from './CatDetails'
import ParallaxImage from "./ParallaxImage";
import SectionTitle from "./SectionTitle";
import Footer from "./Footer";


const MainPage = (props) => {

    return(
<>
{/*  SECTION HERO IMAGES  */}
<section className='hero-section' id="search-section">
          <HeroImage />
    </section>

      {/* Search form 
<SectionTitle title="Breed search section" subtitle="choose the most suitable cat for your needs " />
    <section className="section search-section" >
      <CatForm/>
    </section> */}

{/* First Parallax */}
    <section className="section" >
      <ParallaxImage />
    </section>



    {/* Breeds list */}
    <SectionTitle title="Cat breeds list" subtitle="all cat's species are here.... " />
    <section className="section breeds-section " id="breeds-section">
      <CatBreedsList />
    </section>

    {/* Second  Parallax */}
    <section className="section">
      <ParallaxImage />
    </section>


    <section className="section" id="footer-section">
      <Footer /> 
    </section>
</>
    )
}

export default MainPage
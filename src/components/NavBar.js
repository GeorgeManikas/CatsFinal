import React,  {useEffect} from 'react'
import M from 'materialize-css'
const NavBar = () => {

    /// initializes mobile nav
    useEffect(()=>{
      var mobileNav = document.querySelectorAll('.sidenav');
      M.Sidenav.init(mobileNav,{})
    },[])
    return (
        <>
            <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">CatFinder</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down" >
        
          <li><a href="#breeds-section">Cat breeds</a></li>
          <li><a href="/about">About page</a></li>
        </ul>
      </div>
    </nav>
  </div> 

  {/* MOBILE NAV */}
  <ul className="sidenav" id="mobile-demo" style={{textDecoration:'none'}}>
  <li><a href="/" className="brand-logo" style={{textDecoration:'none', color:'black'}}>Home Page</a></li>
    <div className="divider"></div>
    <li><a href="#breeds-section">Cat breeds</a></li>
    <li><a href="/about">About page</a></li>
    
    
  </ul>
        </>
    )
}

export default NavBar

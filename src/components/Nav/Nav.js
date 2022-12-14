import React from "react";
import {logo} from "../../utils/media";
import "./Nav.css";

const Nav = () => {
  return (
    // Responsive and fixed to top navbar
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <div style={{fontWeight:'bold'}}>INFINIT BRANDS</div>
          {/* <img className="rounded img-fluid" src={logo} width="40" height="40" alt="Thriving Cities Logo" /> */}
        </a>
        {/* Hamburger menu button */}
        <button className="navbar-toggler navbar-toggler-right font-weight-bold" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#city">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#events">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
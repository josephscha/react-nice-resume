import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
// import BackgroundSlider from 'react-background-slider'


class Header extends Component {
  render() {

   const linkedIn = 'temporary placeholder for linkedin';

    return (
      <header id="home">
      {/* <ParticlesBg type="circle" bg={true} /> */}
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#vision">Mission</a></li>
            <li><a className="smoothscroll" href="#team">Team</a></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <img src="../images/templogo.png"></img>
            <h1 className="responsive-headline">BORUS</h1>
            <h3>"Bring exposure to traders and trading knowledge to users, focused on human connection and camaraderie."</h3>
            {/* <h3>The problem BORUS aims to solve is the limited options for inexperienced and/or busy investors; doing all of the work and management on their own and weighing risk by themselves, or putting all of their trust and money into a white collar advisory firm.</h3>
            <br></br>
            <br/>
            <br/>
            <h3>Our Mission</h3>
            <h3>To demonstrate the value of interdependence and promote shared prosperity, Life, Liberty, and the pursuit of a better investment portfolio.</h3>
       */}
            {/* <hr /> */}
            {/* <ul className="social">
               <a href={linkedIn} className="button btn project-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
            </ul> */}
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#team"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

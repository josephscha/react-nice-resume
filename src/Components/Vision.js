import React, { Component } from 'react';
// import ParticlesBg  from "particles-bg";

class Vision extends Component {
  render() {
    return (
      <section id="vision">
        {/* <ParticlesBg color="#03fdf" type="cobweb" bg={true} /> */}
        <div className="vision-container">
          <h2>Our Mission</h2>
            <h3>To demonstrate the value of interdependence and promote shared prosperity, Life, Liberty and the pursuit of a better investment portfolio</h3>
          <h2 className="header">The Challenge</h2>
            <p>The problem BORUS aims to solve is the limited options for inexperienced and/or busy investors; doing all of the work and management on their own and weighing risk by themselves, or putting all of their trust and money into a white collar advisory firm.</p>
        </div>
      </section>

    );
  }
}

export default Vision;

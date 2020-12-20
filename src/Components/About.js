import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Picture" />
            <h2>Person 1</h2>
            <p>person 1 information here</p>
         </div>
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Picture" />
            <h2>Person 2</h2>
            <p>person 2 information here</p>
         </div>
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Picture" />
            <h2>Person 3</h2>
            <p>person 3 information here</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

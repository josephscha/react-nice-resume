import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import { FaLinkedin } from 'react-icons/fa';
 
class Team extends Component {
  render() {
    return (
        <section id="team">
        <ParticlesBg color="#03fdf" type="cobweb" bg={true} />
                <h1>Meet the team</h1>
                <p>Based out of New York City</p>
            <div className="team-container">
                <div className="team-member">
                    <div className="team-img">
                       <img src="../images/Joseph.png" alt="Joseph"/>
                    </div>
                    <h3>Joseph S. Cha</h3>
                    <p className="role">Co-Founder</p>
                    <p className="role">Lead Developer</p>
                    <p>Fullstack Developer based out of New York City. Joseph enjoys creating websites, applications, and anything in between that serves a real life purpose while maintaining top user experience. Always on a journey of continued learning and personal and professional growth.</p>
                    <p>https://www.linkedin.com/in/joseph-cha-316639174/</p>
                    <a href="https://www.linkedin.com/in/joseph-cha-316639174/" className="button btn project-btn"><i className="fa fa-linkedin"></i></a>
                </div>
                <div className="team-member">
                <div className="team-img">
                    <img src="../images/steele.jpg" alt="Steele"/>
                </div>
                    <h3>Steele FX Moran</h3>
                    <p className="role">Founder</p>
                    <p className="role">Management &amp; Finance</p>
                    <p>Holding experience in business management and financial analysis, Steele devotes himself to structuring BORUS to where it will be a dominating platform for Americans to prosper on. Hobby's include changing the world.</p>
                    <p>https://www.linkedin.com/in/steele-moran-2b76a7164/</p>
                </div>
                <div className="team-member">
                <div className="team-img">
                <img src="../images/george.jpg" alt="George"/>
                </div>
                    <h3>George C. Humphreys</h3>
                    <p className="role">Co-Founder</p>
                    <p className="role">Research &amp; Strategy</p>
                    <p>With his knowledge of the space, George has helped launch several blockchain and crypto startups, such as GameCoin, Ontrak and Input Innovate. He is a Stake Pool Operator for Cardano in his free time and is a proponent of cascading disruption.</p>
                    <p>https://www.linkedin.com/in/george-humphreys-97429a182/</p>
                </div>
            </div>
        </section>
    );
  }
}

export default Team;

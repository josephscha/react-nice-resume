import React, { Component } from 'react';

class Footer extends Component {
  render() {
      //   <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>


    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              Social media links here
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Borus Financial LLC</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;

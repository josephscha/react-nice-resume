import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Vision from './Components/Vision';
 
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }


  render() {
    return (
      <div className="App">
        <Header />
        {/* <About /> */}
        <Vision />
        <Team />
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;

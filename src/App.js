import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;

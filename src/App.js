import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="john" email="hello" phone="555555"/>
        <Contact name="karen" email="goodbye" phone="555555"/>
      </div>
    );
  }
}

export default App;

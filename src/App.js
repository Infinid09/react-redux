import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import List from './components/list';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <List/>
      </div>
    );
  }
}

export default App;

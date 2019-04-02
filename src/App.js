import React, { Component } from 'react';
import './App.css';
import PinsContainer from './components/PinsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Pins </h1>
        </header>

        <PinsContainer />

      </div>
    );
  }
}

export default App;

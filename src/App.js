import React, { Component } from 'react';
import './App.css';
import ArticlesContainer from './components/ArticlesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Articles </h1>
        </header>

        <ArticlesContainer />
        
      </div>
    );
  }
}

export default App;

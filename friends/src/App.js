import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Redux Friends</h1>
      </Router>
    );
  }
}

export default App;
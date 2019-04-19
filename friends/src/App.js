import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './Components/Login';
import FriendsList from './Components/FriendsList'
import PrivateRoute from './Components/PrivateRoute'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <>
          <h1>Redux Friends</h1>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
      </>
        </Router>
    );
  }
}

export default App;

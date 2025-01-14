import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data
      })
    })
      .catch(err => {
        console.log("err", err)
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
        <h1>Welcome to the Land of the Smurfs</h1>
          <NavLink to="/smurf-form">Become a Smurf</NavLink>
          <NavLink to="/">Smurf List</NavLink>
        </nav>
        <Route path="/" exact render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} /> } />
        <Route path="/smurf-form" render={(props) => <SmurfForm /> } />
      </div>
    );
  }
}

export default App;

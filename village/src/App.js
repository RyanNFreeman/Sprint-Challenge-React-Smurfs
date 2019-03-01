import React, { Component } from 'react';
import axios from 'axios'
import {Route, Link} from 'react-router-dom'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  addSmurf = (e, smurfs) => {
    axios.post('http://localhost:3333/smurfs', smurfs)
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/smurf-form'>Add Smurfs</Link>
        <SmurfForm addSmurf={this.addSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
        {/* <Route path='/' component={Smurfs} />
        <Route path='/smurf-form' component={SmurfForm} /> */}
      </div>
    );
  }
}

export default App;

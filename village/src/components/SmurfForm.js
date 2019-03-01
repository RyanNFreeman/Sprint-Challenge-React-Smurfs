import React, { Component } from 'react';
import axios from 'axios'
import '../App.css'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf : {
        name: '',
        age: '',
        height: ''}
    };
  }

  addSmurf = e => {
    let smurfs = {
      name: this.state.smurf.name,
      age: this.state.smurf.age,
      height: this.state.smurf.height
    }

      axios.post('http://localhost:3333/smurfs', smurfs)
        .then(res => this.setState({smurfs: res.data}))
        .catch(err => console.log(err))
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => {
      return {
        smurf: {
          ...prevState.smurf,
          [e.target.name]: e.target.value
          }
        }
      }
    )
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

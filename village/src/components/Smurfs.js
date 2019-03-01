import React, { Component } from 'react';
import Smurf from './Smurf';

const display = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%'
}

class Smurfs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div style={display}>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

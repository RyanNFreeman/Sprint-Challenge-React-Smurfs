import React from 'react';

const box = {
  borderRadius: '12px',
  width: '40%',
  margin: '4.5%',
  background: 'white'
}

const Smurf = props => {
  return (
    <div className="Smurf" style={box}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


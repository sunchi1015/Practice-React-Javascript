import React from 'react';

const Person = props => {
  return (
    <div>
      <h1>Employee Details</h1>
      <h3>Name:{props.name}</h3>
      <h3>Age:{props.age}</h3>
      {props.children}
    </div>
  );
};

export default Person;

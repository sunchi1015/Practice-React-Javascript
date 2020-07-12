import React from 'react';
import '../Component/Person.css';
const Person = props => {
  return (
    <div className="Person">
      <h1>Employee Details</h1>
      <h3>Name:{props.name}</h3>
      <h3 onClick={props.changeAge}>Age:{props.age}</h3>
      <input type="text" onChange={props.changeAge} value={props.age} />
      {props.children}
    </div>
  );
};

export default Person;

import React from 'react';
import '../Component/Person.css';
const Person = ({ children, classOne }) => {
  return (
    <div className="Person">
      <h1 className={classOne}>Employee Details</h1>
    </div>
  );
};

// Default props
Person.defaultProps = {
  classOne: 'classOne'
};

export default Person;

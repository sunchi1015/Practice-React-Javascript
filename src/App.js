import React, { Component, useState } from 'react';
import './styles.css';
import Person from './Component/Person';

export default function App() {
  let [prevState, stateChange] = useState({
    Person: [{ name: 'John', age: 37 }, { name: 'Bake', age: 12 }],
    showPerson: true
  });
  const changeName = () => {
    stateChange({
      Person: [{ name: 'John Calvin', age: 37 }, { name: 'Bake', age: 12 }]
    });
    console.log(prevState);
  };

  return (
    <div className="App">
      <button onClick={changeName}>Change Name</button>
      <Person name={prevState.Person[0].name} age={prevState.Person[0].age} />
      <Person name={prevState.Person[1].name} age={prevState.Person[1].age}>
        <h4>Childer From App</h4>
        <h4>Childer From To Custom</h4>
      </Person>
    </div>
  );
}

// class App extends Component {
//   state = {
//     Person: [{ name: 'John', age: 37 }, { name: 'Bake', age: 12 }],
//     showPerson: true
//   };

//   changeName = () => {
//     this.setState({
//       Person: [{ name: 'John Calvin', age: 37 }, { name: 'Bake', age: 12 }],
//       showPerson: true
//     });
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.changeName}>Change Name</button>
//         <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
//         <Person name={'Jogn'} age={32}>
//           <h4>Childer From App</h4>
//           <h4>Childer From To Custom</h4>
//         </Person>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './styles.css';
import Person from './Component/Person';

// export default function App() {
//   return (
//     <div className="App">
//       <Person name={"Jogn"} age={32} />
//       <Person name={"Jogn"} age={32}>
//         <h4>Childer From App</h4>
//         <h4>Childer From To Custom</h4>
//       </Person>
//     </div>
//   );
// }

class App extends Component {
  state = {
    Person: [{ name: 'John', age: 37 }, { name: 'Bake', age: 12 }],
    showPerson: true
  };

  changeName = () => {
    this.setState({
      Person: [{ name: 'John Calvin', age: 37 }, { name: 'Bake', age: 12 }],
      showPerson: true
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.changeName}>Change Name</button>
        <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
        <Person name={'Jogn'} age={32}>
          <h4>Childer From App</h4>
          <h4>Childer From To Custom</h4>
        </Person>
      </div>
    );
  }
}

export default App;

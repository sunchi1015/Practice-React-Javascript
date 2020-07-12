import React, { Component, useState } from 'react';
import './styles.css';
import Person from './Component/Person';

// export default function App() {
//   let [prevState, stateChange] = useState({
//     Person: [{ name: 'John', age: 37 }, { name: 'Bake', age: 12 }],
//     showPerson: true
//   });
//   const changeName = () => {
//     stateChange({
//       Person: [{ name: 'John Calvin', age: 37 }, { name: 'Bake', age: 12 }]
//     });
//     console.log(prevState);
//   };

//   return (
//     <div className="App">
//       <button onClick={changeName}>Change Name</button>
//       <Person name={prevState.Person[0].name} age={prevState.Person[0].age} />
//       <Person name={prevState.Person[1].name} age={prevState.Person[1].age}>
//         <h4>Childer From App</h4>
//         <h4>Childer From To Custom</h4>
//       </Person>
//     </div>
//   );
// }

class App extends Component {
  // style = {};
  state = {
    Person: [{ name: 'John', age: 37 }, { name: 'Bake', age: 12 }],
    showPerson: true
  };

  changeNameNormal = newName => {
    console.log('new Name', newName);
    this.setState({
      Person: [{ name: newName, age: 23 }, { name: 'Bake', age: 12 }],
      showPerson: true
    });
    console.log(this.state);
  };

  changeName = event => {
    console.log('event', event.target.value);
    const newAge = event.target.value;
    this.setState({
      Person: [{ name: 'John Calvin', age: newAge }, { name: 'Bake', age: 12 }],
      showPerson: true
    });
    console.log(this.state);
  };

  toggleData = () => {
    const currentState = this.state.showPerson;
    this.setState({ showPerson: !currentState });
    console.log('full sate--->', this.state);
  };
  style = {
    backgroundColor: 'coral',
    font: 'inherit',
    color: '#fff',
    border: '1px solid #000',
    padding: '1rem',
    margin: '2rem 1rem',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: '2px 2px 10px 0 rgba(0,0,0,.4)'
  };

  render() {
    // this.style = {
    //   backgroundColor: 'coral',
    //   font: 'inherit',
    //   color: '#fff',
    //   border: '1px solid #000',
    //   padding: '1rem',
    //   margin: '2rem 1rem',
    //   outline: 'none',
    //   cursor: 'pointer',
    //   boxShadow: '2px 2px 10px 0 rgba(0,0,0,.4)'
    // };
    const style = {
      backgroundColor: 'coral',
      font: 'inherit',
      color: '#fff',
      border: '1px solid #000',
      padding: '1rem',
      margin: '2rem 1rem',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 10px 0 rgba(0,0,0,.4)'
    };
    return (
      <div className="App">
        {/* Pass method params 1 */}
        {/* style using class property */}
        {/* <button style={this.style} onClick={event => this.changeNameNormal('Durga')}>
          Change Name
        </button> */}
        <button style={this.style} onClick={this.toggleData}>
          Toggle Data
        </button>
        {/* style using constant */}
        <button style={style} onClick={event => this.changeNameNormal('Durga')}>
          Change Name
        </button>
        {/* Pass method params 1 */}
        <button style={style} onClick={this.changeNameNormal.bind(this, 'Arun')}>
          Change Name2
        </button>
        {/* Pass method params 1 with Handle event from child*/}
        {this.state.showPerson ? (
          <div>
            <Person changeAge={this.changeName} name={this.state.Person[0].name} age={this.state.Person[0].age} />
            <Person name={this.state.Person[1].name} age={this.state.Person[1].age}>
              <h4>Childer From App</h4>
              <h4>Childer From To Custom</h4>
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

import React from "react";
import "./styles.css";
import Person from "./Component/Person";

export default function App() {
  return (
    <div className="App">
      <Person name={"Jogn"} age={32} />
      <Person name={"Jogn"} age={32}>
        <h4>Childer From App</h4>
        <h4>Childer From To Custom</h4>
      </Person>
    </div>
  );
}

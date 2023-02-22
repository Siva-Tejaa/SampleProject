import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <div className="App">
      <h1>Redux Counter Application</h1>
      <Counter />
      <br />
      <hr />
      <h1>Redux CRUD Operations</h1>
      <CrudApp />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import List from "./List";

function App() {
  const [list, addElement] = useState(["A Item"]);
  const [newItem, setNewItem] = useState("");

  function appendElement() {
    addElement((preValue) => {
      return [...preValue, newItem];
    });
  }

  function handleNewItem(event) {
    setNewItem(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input
          onChange={handleNewItem}
          type="text"
          placeholder="Name Of Item"
          name="itemName"
        />
        <button onClick={appendElement}>
          <span>Add</span>
        </button>
      </div>

      <List listEntered={list} />
    </div>
  );
}

export default App;

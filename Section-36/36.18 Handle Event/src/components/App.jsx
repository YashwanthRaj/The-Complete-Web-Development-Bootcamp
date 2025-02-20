import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");

  const [buttonIsHovered, setHover] = useState(false);

  function mouseOverEvent() {
    setHover(true);
  }

  function mouseOutEvent() {
    setHover(false);
  }

  function changeHeading() {
    setHeading("ChangedName");
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={buttonIsHovered ? { backgroundColor: "black" } : null}
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
        on
        onClick={changeHeading}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

const name = "Yashwanth Raj Varadharajan";

ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>Your name has {name.length} characters in it !!</p>
  </div>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

const name = "Yashwanth Raj Varadharajan";

const currentYear = "2025";

ReactDOM.render(
  <div>
    <h1>JSX Expressions Challenge</h1>
    <p>Created by {name} </p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);

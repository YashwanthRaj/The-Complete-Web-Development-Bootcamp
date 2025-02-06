//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const now = new Date();
let time = now.getHours();
// console.log(time);

let message;
let style;

// time = 19;

if (time > 0 && time <= 12) {
  message = "Good Morning";
  style = {
    color: "red",
  };
} else if (time > 12 && time <= 18) {
  message = " Good Afternoon";
  style = {
    color: "green",
  };
} else {
  message = "Good Evening";
  style = {
    color: "blue",
  };
}

ReactDom.render(
  <h1 className="heading" style={style}>
    {message} !!
  </h1>,
  document.getElementById("root")
);

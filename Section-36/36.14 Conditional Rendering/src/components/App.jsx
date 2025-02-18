import React from "react";
import Login from "./Login";

var loggedIn = false;

// function checkLoggedIn() {
//   if (loggedIn) {
//     return <h1> Hello </h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  // return <div className="container">{checkLoggedIn()}</div>;
  return (
    <div className="container">{loggedIn ? <h1> Hello </h1> : <Login />}</div>
  );
}

export default App;

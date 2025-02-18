import React, { useState } from "react";

function App() {
  function returnCurrentTime() {
    let time = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return time;
  }

  function updateTime() {
    const newTime = returnCurrentTime();
    setTime(newTime);
  }

  const [timeNow, setTime] = useState(returnCurrentTime());

  // This line will update the clock every second. i.e will update the h1 with new time
  // setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{timeNow}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import OptionHeader from "./Components/OptionHeader.jsx";
import AddAlarm from "./Components/AddAlarm.jsx";
import WorldClock from "./Components/WorldClock.jsx";
import Stopwatch from "./Components/Stopwatch.jsx";

const App = () => {
  let time = new Date().toLocaleTimeString();
  let [count, setCount] = useState(time);
  setInterval(() => {
    if (time !== new Date().toLocaleTimeString())
      setCount(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <container className="scoreContainer">
        <h1>You Are Here</h1>
        <div className="scoreBox">
          <h1 className="count">{count}</h1>
        </div>
        <br />
        <OptionHeader />
        <AddAlarm />
        <WorldClock />
        <Stopwatch />
      </container>
    </>
  );
};

export default App;

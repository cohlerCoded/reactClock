import "./App.css";
import React, { useState } from "react";

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
        <h1>The time is:</h1>
        <div className="scoreBox">
          <h1 className="count">{count}</h1>
        </div>
        <br />
        <div className="buttonDiv">
          <button
            className="btn btn-success mr-5"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className="btn btn-danger ml-5"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
        </div>
      </container>
    </>
  );
};

export default App;

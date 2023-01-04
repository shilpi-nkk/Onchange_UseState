import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [headingText, setHeading] = useState("Hello");
  const [changeText, setChange] = useState(" ");
  function EventHandling() {
    setHeading("hello" + changeText);
  }
  function EventOver() {
    setColor("black");
  }
  function EventOut() {
    setColor("white");
  }
  //this onChange returns an object,event is an object here
  function EventChange(event) {
    setChange(event.target.value);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        onChange={EventChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: color }}
        onClick={EventHandling}
        onMouseOver={EventOver}
        onMouseOut={EventOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

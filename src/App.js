import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [inputText, setinputText] = useState("EMPTY TEXT");
  function inputHandler(e) {
    //setinputText(e.target.value);
    const emoji = e.target.value;
    if (emoji === "") setinputText("Empty Text");
    else {
      switch (emoji) {
        case "ðĪŠ":
          setinputText("EXCITED!");
          break;
        case "ð":
          setinputText("SARCASM / SILLY");
          break;
        case "ð":
          setinputText("CHEERFUL");
          break;
        case "ð":
          setinputText("HEART EYES");
          break;
        case "ðĪĢ":
          setinputText("ROLLING ON THE FLOOR");
          break;

        default:
          setinputText("SORRY! UNAVAILABLE ð");
      }
    }
  }
  return (
    <div className="App">
      <h1>~ EMOJIPEDIA ~</h1>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="what's on your mind?"
      />
      <div className="result-box">{inputText}</div>
      <div className="emoji-box">
        <h2>Search for below Emojis </h2>
        <h1> ð ð ðĪĢ ð ðĪŠ</h1>
      </div>
    </div>
  );
}

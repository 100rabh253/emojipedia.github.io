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
        case "🤪":
          setinputText("EXCITED!");
          break;
        case "🙃":
          setinputText("SARCASM / SILLY");
          break;
        case "😁":
          setinputText("CHEERFUL");
          break;
        case "😍":
          setinputText("HEART EYES");
          break;
        case "🤣":
          setinputText("ROLLING ON THE FLOOR");
          break;

        default:
          setinputText("SORRY! UNAVAILABLE 😞");
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
        <h1> 😁 🙃 🤣 😍 🤪</h1>
      </div>
    </div>
  );
}

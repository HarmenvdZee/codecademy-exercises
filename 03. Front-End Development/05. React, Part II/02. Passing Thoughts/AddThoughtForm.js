import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = ({ target }) => {
    setTextInput(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textInput.length > 0) {
      const newThought = {
        id: generateId(),
        text: textInput,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(newThought);
    }
    setTextInput("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={textInput}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

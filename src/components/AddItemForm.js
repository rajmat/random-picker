import React, { useState } from "react";
import { Form, TextInput, SubmitButton } from "../ui";

function AddItemForm({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const value = inputValue.trim();
    if (!value) return;
    addItem(value);
    setInputValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Type something..."
        value={inputValue}
        autoFocus
        onChange={event => setInputValue(event.target.value)}
      />
      <SubmitButton type="submit" color="secondary">
        Add
      </SubmitButton>
    </Form>
  );
}

export default AddItemForm;

import React, { useState } from "react";
import Container from "../ui/Container";
import { AppTitle, Form, TextInput, Item, List } from "../ui";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <Container>
        <AppTitle>Randomizer</AppTitle>
        <Form
          onSubmit={event => {
            event.preventDefault();
            const value = inputValue.trim();
            value.length && setList([...list, value]);
            setInputValue("");
          }}>
          <TextInput
            type="text"
            placeholder="Type something..."
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
        </Form>
        <List>
          {list.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default App;

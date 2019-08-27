import React, { useState } from "react";
import Container from "../ui/Container";
import { AppTitle, Form, TextInput, Item, List, SubmitButton } from "../ui";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  return (
    <Container>
      <AppTitle>Randomizer</AppTitle>
      <Form
        onSubmit={event => {
          event.preventDefault();
          const value = inputValue.trim();
          value.length && setList([value, ...list]);
          setInputValue("");
        }}>
        <TextInput
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <SubmitButton type="submit" value="Add" />
      </Form>
      <List>
        {list.map((listItem, i) => (
          <Item key={i} onDelete={() => setList(list.filter(item => item !== listItem))}>
            {listItem}
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default App;

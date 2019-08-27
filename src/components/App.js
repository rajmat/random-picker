import React, { useState } from "react";
import Container from "../ui/Container";
import { AppTitle, Item, UnorderedList } from "../ui";
import { AddItemForm } from ".";

function App() {
  const [list, setList] = useState([]);

  const addItem = item => {
    setList([item, ...list]);
  };

  const deleteItem = index => {
    const filteredList = list.filter((item, i) => i !== index);
    setList(filteredList);
  };

  return (
    <Container>
      <AppTitle>Randomizer</AppTitle>
      <AddItemForm addItem={addItem} />
      <UnorderedList>
        {list.map((listItem, i) => (
          <Item key={i} onDelete={() => deleteItem(i)}>
            {listItem}
          </Item>
        ))}
      </UnorderedList>
    </Container>
  );
}

export default App;

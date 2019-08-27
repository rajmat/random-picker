import React, { useState } from "react";
import Container from "../ui/Container";
import { ActionButton, AppTitle, Item, UnorderedList } from "../ui";
import { AddItemForm } from ".";

function App() {
  const [list, setList] = useState([]);
  const [randomResult, setRandomResult] = useState("");

  const addItem = item => {
    setList([item, ...list]);
  };

  const deleteItem = index => {
    const filteredList = list.filter((item, i) => i !== index);
    setList(filteredList);
  };

  const randomize = () => {
    const result = list[Math.floor(Math.random() * list.length)];
    setRandomResult(result);
  };

  return (
    <Container>
      <AppTitle>Randomizer</AppTitle>
      {randomResult ? (
        <p>{randomResult}</p>
      ) : (
        <>
          <AddItemForm addItem={addItem} />
          <UnorderedList>
            {list.map((listItem, i) => (
              <Item key={i} onDelete={() => deleteItem(i)}>
                {listItem}
              </Item>
            ))}
          </UnorderedList>
          {list.length >= 2 && <ActionButton onClick={randomize}>Randomize</ActionButton>}
        </>
      )}
    </Container>
  );
}

export default App;

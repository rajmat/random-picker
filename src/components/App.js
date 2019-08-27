import React, { useState } from "react";
import Container from "../ui/Container";
import { ActionButton, AppTitle, Item, UnorderedList, ResultView } from "../ui";
import { AddItemForm } from ".";

function App() {
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");

  const addItem = item => {
    setList([item, ...list]);
  };

  const deleteItem = index => {
    const filteredList = list.filter((item, i) => i !== index);
    setList(filteredList);
  };

  const randomize = () => {
    const result = list[Math.floor(Math.random() * list.length)];
    setResult(result);
  };

  const clearList = () => {
    setList([]);
    setResult("");
  };

  return (
    <Container>
      <AppTitle>Randomizer</AppTitle>
      {result ? (
        <ResultView
          result={result}
          randomize={randomize}
          goBack={() => setResult("")}
          clearList={clearList}
        />
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

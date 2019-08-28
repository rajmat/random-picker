import React, { useState } from "react";
import Container from "../ui/Container";
import { ActionButton, AppTitle, Item, UnorderedList } from "../ui";
import { AddItemForm } from ".";
import ShowResult from "./ShowResult";

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

  const ShowList = () => (
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
  );

  return (
    <Container>
      <AppTitle>Randomizer</AppTitle>
      {result ? (
        <ShowResult
          result={result}
          randomize={randomize}
          goBack={() => setResult("")}
          clearList={clearList}
        />
      ) : (
        <ShowList />
      )}
    </Container>
  );
}

export default App;

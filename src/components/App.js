import React, { useState } from "react";
import Container from "../ui/Container";
import { ActionButton, AppTitle, Item, UnorderedList } from "../ui";
import { AddItemForm } from ".";
import ShowResult from "./ShowResult";

function App() {
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");
  const [resultView, setResultView] = useState(false);

  const addItem = item => {
    setList([item, ...list]);
  };

  const deleteItem = index => {
    const filteredList = list.filter((item, i) => i !== index);
    setList(filteredList);
  };

  const randomize = () => {
    setResult("");
    setResultView(true);
    const result = list[Math.floor(Math.random() * list.length)];
    setTimeout(() => {
      setResult(result);
    }, 2000);
  };

  const clearList = () => {
    setResultView(false);
    setList([]);
    setResult("");
  };

  const goBack = () => {
    setResultView(false);
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
      {resultView ? (
        <ShowResult result={result} randomize={randomize} goBack={goBack} clearList={clearList} />
      ) : (
        <ShowList />
      )}
    </Container>
  );
}

export default App;

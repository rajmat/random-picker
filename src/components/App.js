import React, { useState } from "react";
import uuid from "uuid";
import { AppTitle, Container, LoadingView } from "../ui";
import { Result, Main } from ".";

function App() {
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");
  const [isLoading, setLoading] = useState(false);

  const addItem = text => setList([{ id: uuid(), text }, ...list]);

  const deleteItem = index => {
    const filteredList = list.filter(item => item.id !== index);
    setList(filteredList);
  };

  const randomPick = () => {
    setLoading(true);
    setResult("");
    const result = list[Math.floor(Math.random() * list.length)];
    setTimeout(() => {
      setResult(result.text);
      setLoading(false);
    }, 2500);
  };

  const emptyList = () => {
    setList([]);
    setResult("");
  };

  const goBack = () => setResult("");

  return (
    <Container>
      <AppTitle>Random Picker</AppTitle>
      {isLoading ? (
        <LoadingView text="And the winner is..." />
      ) : result ? (
        <Result result={result} randomPick={randomPick} goBack={goBack} emptyList={emptyList} />
      ) : (
        <Main list={list} addItem={addItem} deleteItem={deleteItem} randomPick={randomPick} />
      )}
    </Container>
  );
}

export default App;

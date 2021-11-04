import React, { useState } from "react";
import uuid from "uuid";
import "typeface-comfortaa";
import { assignColorToListItem } from "../utils/functions";
import { AppTitle, Container, LoadingView, GlobalStyles } from "../ui";
import { Result, Main } from ".";
import logo from "../utils/BAK.png";

function App() {
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");
  const [isLoading, setLoading] = useState(false);

  const addItem = (text) => {
    const item = { id: uuid(), color: assignColorToListItem(list), text };
    setList([item, ...list]);
  };

  const deleteItem = (index) => {
    const filteredList = list.filter((item) => item.id !== index);
    setList(filteredList);
  };

  const randomPick = () => {
    setLoading(true);
    setResult("");
    const result = list[Math.floor(Math.random() * list.length)];
    setTimeout(() => {
      setResult(result);
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
      <GlobalStyles />
      <AppTitle>
        {" "}
        <img src={logo} style={{ width: "90px", height: "100px" }} />
        BAK Sörkör Generátor AI
      </AppTitle>
      {isLoading ? (
        <LoadingView text="And the winner is..." />
      ) : result ? (
        <Result
          result={result}
          randomPick={randomPick}
          goBack={goBack}
          emptyList={emptyList}
        />
      ) : (
        <Main
          list={list}
          addItem={addItem}
          deleteItem={deleteItem}
          randomPick={randomPick}
        />
      )}
    </Container>
  );
}

export default App;

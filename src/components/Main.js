import React from "react";
import { ActionButton, Item, List } from "../ui";
import { AddItemForm } from ".";

function Main({ list, addItem, deleteItem, randomPick }) {
  return (
    <>
      <AddItemForm addItem={addItem} />
      <List>
        {list.map((listItem, i) => (
          <Item key={i} onDelete={() => deleteItem(i)}>
            {listItem}
          </Item>
        ))}
      </List>
      {list.length > 1 && <ActionButton onClick={randomPick}>Pick a winner</ActionButton>}
    </>
  );
}

export default Main;

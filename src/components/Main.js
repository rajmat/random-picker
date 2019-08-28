import React from "react";
import { ActionButton, Item, UnorderedList } from "../ui";
import { AddItemForm } from ".";

function Main({ list, addItem, deleteItem, randomize }) {
  return (
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
}

export default Main;

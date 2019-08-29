import React from "react";
import { ContainedButton, Item, List } from "../ui";
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
      {list.length > 1 && (
        <ContainedButton pulseAnimated onClick={randomPick}>
          Pick a winner
        </ContainedButton>
      )}
    </>
  );
}

export default Main;

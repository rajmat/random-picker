import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ContainedButton, Item, List } from "../ui";
import { AddItemForm } from ".";

import "../animations/item-transitions.css";

function Main({ list, addItem, deleteItem, randomPick }) {
  return (
    <>
      <AddItemForm addItem={addItem} />
      <List>
        <TransitionGroup>
          {list.map(item => (
            <CSSTransition key={item.id} timeout={500} classNames="item">
              <Item onDelete={() => deleteItem(item.id)}>{item.text}</Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
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

import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ContainedButton, Item, List, ListView } from "../ui";
import { AddItemForm } from ".";

import "../animations/item-transitions.css";

function Main({ list, addItem, deleteItem, randomPick }) {
  return (
    <ListView>
      <AddItemForm addItem={addItem} list={list} />
      <List>
        <TransitionGroup>
          {list.map(item => (
            <CSSTransition key={item.id} timeout={500} classNames="item">
              <Item color={item.color} onDelete={() => deleteItem(item.id)}>{item.text}</Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
      {list.length > 1 && (
        <ContainedButton color="primary" pulseAnimated onClick={randomPick}>
          Nézzük a győztest
        </ContainedButton>
      )}
    </ListView>
  );
}

export default Main;

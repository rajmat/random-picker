import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../variables";

const Container = styled.li`
  box-sizing: border-box;
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0;
  color: ${colors.primaryColor};
  font-family: ${fonts.mainFont};
  font-size: 30px;
  line-height: 30px;
  padding: 20px 30px;
  box-sizing: border-box;
  max-width: 500px;
  word-wrap: break-word;
`;

const Cross = styled.button`
  color: ${colors.secondaryColor};
  font-family: ${fonts.mainFont};
  font-size: 30px;
  line-height: 30px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 20px 30px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${colors.primaryColor};
    outline: none;
  }
`;

const Item = ({ children, onDelete }) => (
  <Container>
    <Text>{children}</Text>
    <Cross onClick={onDelete}>x</Cross>
  </Container>
);

export default Item;

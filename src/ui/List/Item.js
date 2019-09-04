import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../variables";
import { ContentText } from "../Text";

const Container = styled.li`
  box-sizing: border-box;
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

const ItemText = styled(ContentText)`
  color: ${props => props.color};
  padding: 20px 30px;
  box-sizing: border-box;
  max-width: 500px;
  word-wrap: break-word;
`;

const Cross = styled.button`
  color: ${props => props.color};
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

const Item = ({ children, onDelete, color }) => (
  <Container>
    <ItemText color={color}>{children}</ItemText>
    <Cross color={color} onClick={onDelete}>x</Cross>
  </Container>
);

export default Item;

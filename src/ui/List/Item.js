import React from "react";
import styled, {css} from "styled-components";
import { colors, fonts } from "../../variables";
import { ContentText } from "../Text";

const Container = styled.li`
  box-sizing: border-box;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 18px 0px;
  }
  @media (max-width: 550px) {
    padding: 13px 0px;
  }
  @media (max-width: 400px) {
    padding: 11px 0px;
  }
`;

const textMediaQueries = css`
  @media (max-width: 768px) {
    font-size: 26px;
  }
  @media (max-width: 550px) {
    font-size: 22px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const ItemText = styled(ContentText)`
  color: ${props => props.color};
  box-sizing: border-box;
  max-width: 550px;
  word-wrap: break-word;
  ${textMediaQueries}
`;

const Cross = styled.button`
  color: ${props => props.color};
  font-family: ${fonts.mainFont};
  font-size: 30px;
  line-height: 30px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin-left: 30px;
  cursor: pointer;
  ${textMediaQueries}
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

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
  word-wrap: break-word;
`;

const Cross = styled(Text)`
  color: ${colors.secondaryColor};
`;

const Item = ({ children, onDelete }) => (
  <Container>
    <Text>{children}</Text>
    <Cross onClick={onDelete}>x</Cross>
  </Container>
);

export default Item;

import React from "react";
import styled from "styled-components";
import { ResultText } from "../Text";

const Container = styled.div`
  width: 600px;
  text-align: center;
  padding-top: 150px;
`;

const ButtonsContainer = styled.div`
  margin-top: 150px;
  & > button {
    margin: 15px auto;
    display: block;
  }
`;

const ResultView = ({ result, children }) => (
  <Container>
    <ResultText>{result}</ResultText>
    <ButtonsContainer>{children}</ButtonsContainer>
  </Container>
);

export default ResultView;

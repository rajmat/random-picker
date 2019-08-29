import React from "react";
import styled from "styled-components";
import { ResultText } from "../Text";

const Container = styled.div`
  width: 600px;
  text-align: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > button {
    margin: 10px auto;
  }
`;

const ResultView = ({ result, children }) => (
  <Container>
    <TextContainer>
      <ResultText>{result}</ResultText>
    </TextContainer>
    <ButtonsContainer>{children}</ButtonsContainer>
  </Container>
);

export default ResultView;

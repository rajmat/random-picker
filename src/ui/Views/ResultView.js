import React from "react";
import styled from "styled-components";
import { ResultText } from "../Text";
import { ActionButton } from "../Form";

const Container = styled.div`
  width: 600px;
  text-align: center;
  padding-top: 150px;
`;

const ButtonsContainer = styled.div`
  margin-top: 150px;
`;

const Button = styled(ActionButton)`
  margin: 15px auto;
  display: block;
`;

const ResultView = ({ result, randomize, clearList, goBack }) => (
  <Container>
    <ResultText>{result}</ResultText>
    <ButtonsContainer>
      <Button onClick={randomize}>Randomize again</Button>
      <Button onClick={clearList}>Create a new list</Button>
      <Button secondary onClick={goBack}>
        Go back
      </Button>
    </ButtonsContainer>
  </Container>
);

export default ResultView;

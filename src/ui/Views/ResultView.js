import React from "react";
import styled from "styled-components";
import { fadeInScale, slideUpFadeIn } from "../../animations";
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

const AnimatedResultText = styled(ResultText)`
  animation: ${fadeInScale} 1s ease-in-out;
  -webkit-animation: ${fadeInScale} 1s ease-in-out;
  visibility: visible;
`;

const ButtonsContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > button {
    margin: 10px auto;
    animation: ${slideUpFadeIn} 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  & > button:first-child {
    animation-duration: 2s;
  }
  & > button:last-child {
    animation-duration: 2.4s;
  }
`;

const ResultView = ({ result, children, color }) => (
  <Container>
    <TextContainer>
      <AnimatedResultText color={color}>{result}</AnimatedResultText>
    </TextContainer>
    <ButtonsContainer>{children}</ButtonsContainer>
  </Container>
);

export default ResultView;

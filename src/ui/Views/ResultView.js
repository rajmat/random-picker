import React from "react";
import styled from "styled-components";
import { fadeInScale, slideUpFadeIn } from "../../animations";
import { ResultText } from "../Text";

const Container = styled.div`
  text-align: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 83vh;
  }
  @media (max-width: 380px) {
    height: 87vh;
  }
`;

const TextContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 380px) {
    height: 62vh;
  }
`;

const AnimatedResultText = styled(ResultText)`
  animation: ${fadeInScale} 1s ease-in-out;
  -webkit-animation: ${fadeInScale} 1s ease-in-out;
  visibility: visible;
`;

const ButtonsContainer = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > button {
    margin: 10px auto;
    animation: ${slideUpFadeIn} 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @media (max-width: 768px) {
      margin: 8px auto;
    }
    @media (max-width: 550px) {
      margin: 6px auto;
    }
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

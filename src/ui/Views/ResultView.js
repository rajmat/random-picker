import React from "react";
import styled, { keyframes } from "styled-components";
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

const fadeInScale = keyframes`
  0% {
		transform: scale(0);
		opacity: 0;		
	}
	60% {
		transform: scale(1.1);	
	}
	80% {
		transform: scale(0.9);
		opacity: 1;	
	}	
	100% {
		transform: scale(1);
		opacity: 1;	
	}
`;

const AnimatedResultText = styled(ResultText)`
  animation: ${fadeInScale} 1s ease-in-out;
  -webkit-animation: ${fadeInScale} 1s ease-in-out;
  visibility: visible;
`;

const slideInBottom = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    -webkit-transform: translateY(80px);
    transform: translateY(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
`;

const ButtonsContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > button {
    margin: 10px auto;
    animation: ${slideInBottom} 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  & > button:first-child {
    animation-duration: 2s;
  }
  & > button:last-child {
    animation-duration: 2.4s;
  }
`;

const ResultView = ({ result, children }) => (
  <Container>
    <TextContainer>
      <AnimatedResultText>{result}</AnimatedResultText>
    </TextContainer>
    <ButtonsContainer>{children}</ButtonsContainer>
  </Container>
);

export default ResultView;

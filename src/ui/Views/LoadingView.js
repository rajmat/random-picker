import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../../variables";
import { ContentText } from "../Text";
import Spinner from "../Spinner";
import { fadeIn } from "../../animations";

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s;
`;

const Text = styled(ContentText)`
  margin-top: 0;
  margin-bottom: 40px;
  color: ${colors.secondaryColor};
  font-family: ${fonts.mainFont};
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
  @media (max-width: 550px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
  @media (max-width: 380px) {
    font-size: 25px;
    margin-bottom: 0;
  }
`;

const LoadingView = ({ text }) => (
  <Container>
    <Text>{text}</Text>
    <Spinner />
  </Container>
);

export default LoadingView;

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
  margin-bottom: 50px;
  color: ${colors.secondaryColor};
  font-family: ${fonts.mainFont};
  font-size: 40px;
`;

const LoadingView = ({ text }) => (
  <Container>
    <Text>{text}</Text>
    <Spinner />
  </Container>
);

export default LoadingView;

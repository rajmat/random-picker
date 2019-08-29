import React from "react";
import styled from "styled-components";
import { fonts, colors } from "../../variables";
import { ContentText } from "../Text";
import Spinner from "../Spinner";

const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

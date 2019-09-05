import React from "react";
import styled from "styled-components";
import { colors } from "../variables";
import { bounceDelay } from "../animations";

const Container = styled.div`
  width: 70px;
  margin: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    width: 60px;
  }
  @media (max-width: 400px) {
    width: 50px;
  }
`;

const Bounce = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${colors.primaryColor};
  border-radius: 100%;
  -webkit-animation: ${bounceDelay} 1.5s infinite ease-in-out both;
  animation: ${bounceDelay} 1.5s infinite ease-in-out both;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 550px) {
    width: 13px;
    height: 13px;
  }
  @media (max-width: 400px) {
    width: 10px;
    height: 10px;
  }
`;

const Bounce1 = styled(Bounce)`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`;

const Bounce2 = styled(Bounce)`
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
`;

const Spinner = () => (
  <Container>
    <Bounce1 />
    <Bounce2 />
    <Bounce />
  </Container>
);

export default Spinner;

import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../variables";

const Container = styled.div`
  width: 70px;
  margin: 100px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const bouncedelay = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`;

const Bounce = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${colors.primaryColor};
  border-radius: 100%;
  -webkit-animation: ${bouncedelay} 1.2s infinite ease-in-out both;
  animation: ${bouncedelay} 1.2s infinite ease-in-out both;
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

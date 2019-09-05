import styled from "styled-components";
import { colors } from "../variables";

const Container = styled.div`
  background-color: ${colors.white};
  height: 100vh;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 550px;    
  }
  @media (max-width: 550px) {
    max-width: 90%;    
  }
  @media (max-width: 400px) {
    max-width: 95%;    
  }
`;

export default Container;

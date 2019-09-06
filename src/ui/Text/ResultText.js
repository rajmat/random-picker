import styled from "styled-components";
import { fonts } from "../../variables";

const ResultText = styled.p`
  margin: 0;
  color: ${props => props.color};
  font-family: ${fonts.mainFont};
  font-size: 65px;
  font-weight: 700;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 550px) {
    font-size: 35px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
`;

export default ResultText;

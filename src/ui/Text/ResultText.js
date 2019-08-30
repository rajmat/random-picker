import styled from "styled-components";
import { fonts } from "../../variables";

const ResultText = styled.p`
  margin: 0;
  color: ${props => props.color};
  font-family: ${fonts.mainFont};
  font-size: 65px;
  word-wrap: break-word;
`;

export default ResultText;

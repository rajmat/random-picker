import styled from "styled-components";
import { colors, fonts } from "../../variables";

const ResultText = styled.p`
  margin: 0;
  color: ${colors.secondaryColor};
  font-family: ${fonts.mainFont};
  font-size: 65px;
  word-wrap: break-word;
`;

export default ResultText;

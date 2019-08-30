import styled from "styled-components";
import { colors, fonts } from "../../variables";

const AppTitle = styled.h1`
  color: ${colors.primaryColor};
  font-size: 70px;
  font-family: ${fonts.mainFont};
  font-weight: 700;
  margin: 0;
  min-height: 20vh;
  display: flex;
  align-items: center;
`;

export default AppTitle;

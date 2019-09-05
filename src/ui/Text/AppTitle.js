import styled from "styled-components";
import { colors, fonts } from "../../variables";

const AppTitle = styled.h1`
  color: ${colors.primaryColor};
  font-size: 70px;
  font-family: ${fonts.mainFont};
  font-weight: 700;
  text-align: center;
  margin: 0;
  min-height: 160px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 55px;
    min-height: 138px;
  }
  @media (max-width: 550px) {
    font-size: 43px;
  }
  @media (max-width: 380px) {
    min-height: 105px;
    font-size: 34px;
  }
`;

export default AppTitle;

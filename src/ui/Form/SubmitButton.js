import styled from "styled-components";
import { colors, mainFont } from "../../variables";

const Button = styled.input`
  background-color: ${colors.white};
  color: ${colors.blueDark};
  font-weight: 700;
  font-size: 22px;
  font-family: ${mainFont};
  height: 60px;
  width: 75px;
  border-radius: 50px;
  padding: 0;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export default Button;

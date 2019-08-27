import styled from "styled-components";
import { colors, fonts } from "../../variables";

const Button = styled.input`
  background-color: ${colors.secondaryColor};
  color: ${colors.white};
  font-weight: 700;
  font-size: 22px;
  font-family: ${fonts.mainFont};
  height: 60px;
  width: 75px;
  border: none;
  border-radius: 50px;
  padding: 0;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export default Button;

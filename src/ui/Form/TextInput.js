import styled from "styled-components";
import { colors, fonts } from "../../variables";

const TextInput = styled.input`
  color: ${colors.primaryColor};
  font-family: ${fonts.mainFont};
  font-size: 30px;
  line-height: 30px;
  background-color: transparent;
  box-sizing: border-box;
  padding: 20px 30px;
  height: 80px;
  width: 500px;
  border: 3px solid ${colors.secondaryColor};
  border-radius: 100px;
  outline: none;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  &::placeholder {
    color: ${colors.secondaryColor};
    opacity: 0.4;
  }
`;

export default TextInput;

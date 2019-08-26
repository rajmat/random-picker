import styled from "styled-components";
import { colors, mainFont } from "../../variables";

const TextInput = styled.input`
  color: ${colors.white};
  font-family: ${mainFont};
  font-size: 30px;
  line-height: 30px;
  background-color: transparent;
  box-sizing: border-box;
  padding: 20px 30px;
  height: 80px;
  border: 3px solid ${colors.white};
  border-radius: 100px;
  outline: none;
  &::placeholder {
    color: ${colors.greyLight};
  }
`;

export default TextInput;

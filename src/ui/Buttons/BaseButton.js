import styled from "styled-components";
import { fonts } from "../../variables";

const BaseButton = styled.button`
  font-weight: 700;
  font-size: 22px;
  font-family: ${fonts.mainFont};
  min-height: 60px;
  border-radius: 50px;
  padding: 0 30px;
  cursor: pointer;
  outline: none;
`;

export default BaseButton;

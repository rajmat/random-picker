import styled from "styled-components";
import { colors, fonts } from "../../variables";

const ActionButton = styled.button`
  background-color: ${props => (props.secondary ? colors.secondaryColor : colors.primaryColor)};
  color: ${colors.white};
  font-weight: 700;
  font-size: 22px;
  font-family: ${fonts.mainFont};
  min-height: 60px;
  border: none;
  border-radius: 50px;
  padding: 0 30px;
  margin-bottom: 30px;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

export default ActionButton;

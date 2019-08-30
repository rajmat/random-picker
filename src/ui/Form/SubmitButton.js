import styled from "styled-components";
import { colors, fonts } from "../../variables";
import { ContainedButton } from "../Buttons";

const Button = styled(ContainedButton)`
  background-color: ${props => colors[`${props.color}Color`]};
  color: ${colors.white};
  width: 75px;
  padding: 0;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;

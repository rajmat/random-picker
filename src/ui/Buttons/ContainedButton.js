import styled from "styled-components";
import { colors } from "../../variables";
import { BaseButton } from ".";

const ContainedButton = styled(BaseButton)`
  background-color: ${props => colors[`${props.color}Color`]};
  color: ${colors.white};
  border: none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  &:focus,
  :hover {
    background-color: blue;
    transition: 0.3s;
  }
`;

export default ContainedButton;

import styled from "styled-components";
import { colors } from "../../variables";
import { BaseButton } from ".";

const OutlinedButton = styled(BaseButton)`
  background-color: transparent;
  color: ${props => colors[`${props.color}Color`]};
  border: ${props => colors[`${props.color}Color`]} 2.5px solid;
  &:focus,
  :hover {
    border-width: 1.5px;
    transition: 0.3s;
  }
`;

export default OutlinedButton;

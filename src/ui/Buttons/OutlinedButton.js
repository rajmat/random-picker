import styled from "styled-components";
import { colors } from "../../variables";
import { BaseButton } from ".";

const color = props => (props.secondary ? colors.secondaryColor : colors.primaryColor);

const OutlinedButton = styled(BaseButton)`
  background-color: transparent;
  color: ${color};
  border: ${color} 2.5px solid;
`;

export default OutlinedButton;

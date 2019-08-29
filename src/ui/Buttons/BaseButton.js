import styled, { css } from "styled-components";
import { fonts } from "../../variables";
import { pulse } from "../../animations";

const BaseButton = styled.button`
  font-size: ${props => (props.small ? "20px" : "22px")};
  font-weight: 700;
  font-family: ${fonts.mainFont};
  border-radius: 50px;
  min-height: ${props => (props.small ? "50px" : "60px")};
  padding: 0 ${props => (props.small ? "25px" : "30px")};
  cursor: pointer;
  outline: none;
  ${props =>
    props.pulseAnimated &&
    css`
      animation: ${pulse} 3s infinite;
      &:hover {
        animation: none;
      }
    `}
`;

export default BaseButton;

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
  @media (max-width: 768px) {
    font-size: ${props => (props.small ? "18px" : "20px")};
    min-height: ${props => (props.small ? "47px" : "55px")};
    padding: 0 ${props => (props.small ? "20px" : "25px")};
  }
  @media (max-width: 550px) {
    font-size: ${props => (props.small ? "16px" : "18px")};
    min-height: ${props => (props.small ? "43px" : "50px")};
    padding: 0 ${props => (props.small ? "18px" : "20px")};
  }
  @media (max-width: 380px) {
    font-size: ${props => (props.small ? "15px" : "16px")};
    min-height: ${props => (props.small ? "40px" : "45px")};
    padding: 0 ${props => (props.small ? "16px" : "18px")};
  }
`;

export default BaseButton;

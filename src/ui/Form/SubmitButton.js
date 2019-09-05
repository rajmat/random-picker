import styled from "styled-components";
import { colors } from "../../variables";
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
  @media (max-width: 768px) {
    font-size: 21px;
    min-height: 55px;
  }
  @media (max-width: 550px) {
    font-size: 18px;
    width: 60px;
    min-height: 50px;
    margin-left: 10px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
    min-height: 45px;
    margin-left: 10px;
  }
`;

export default Button;

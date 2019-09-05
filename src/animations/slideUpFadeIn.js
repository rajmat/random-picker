import { keyframes } from "styled-components";

const slideUpFadeIn = keyframes`
  0% {
    opacity: 0;
    cursor: auto;
  }
  80% {
    -webkit-transform: translateY(80px);
    transform: translateY(80px);
    opacity: 0;
    cursor: auto;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
    cursor: pointer;
  }
`;

export default slideUpFadeIn;

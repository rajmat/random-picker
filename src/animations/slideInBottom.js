import { keyframes } from "styled-components";

const slideInBottom = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    -webkit-transform: translateY(80px);
    transform: translateY(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
`;

export default slideInBottom;

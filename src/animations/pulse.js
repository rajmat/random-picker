import { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
		transform: scale(0.9);
	}
	50% {
		transform: scale(1);
	}	
	100% {
		transform: scale(0.9);
	}	
`;

export default pulse;

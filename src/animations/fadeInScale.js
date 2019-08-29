import { keyframes } from "styled-components";

const fadeInScale = keyframes`
  0% {
		transform: scale(0);
		opacity: 0;		
	}
	60% {
		transform: scale(1.1);	
	}
	80% {
		transform: scale(0.9);
		opacity: 1;	
	}	
	100% {
		transform: scale(1);
		opacity: 1;	
	}
`;

export default fadeInScale;

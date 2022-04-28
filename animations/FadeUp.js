import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px);
//     animation-timing-function: ease-in-out;
//   }

//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

const customAnimation2 = keyframes`
from {
    opacity: 0;
    transform: translate3d(0, 80px, 0): 
}

40%, 60% {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
}

to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

`;

function FadeUp({
	duration,
	triggerOnce,
	cascade,
	damping,
	direction,
	fraction,
	children,
    delay
}) {
	return (
		<Reveal
			duration={duration}
			triggerOnce={triggerOnce}
			keyframes={customAnimation2}
			fraction={0}
			cascade={cascade}
			damping={damping}
			direction={direction}
			// fraction={fraction}
            delay={delay}
		>   
			{children}
		</Reveal>
	);
}

export default FadeUp;

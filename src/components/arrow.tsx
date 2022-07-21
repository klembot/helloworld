import * as React from 'react';
import './arrow.css';

export interface ArrowProps {
	direction: number;
}

export const Arrow = ({direction}: ArrowProps) => {
	return (
		<span className="arrow" style={{transform: `rotate(${direction}deg)`}}>
			<svg width="100%" height="100%" viewBox="0 0 100 100">
				<path
					d="M72.5,60L50,90L27.5,60L72.5,60Z"
					className="arrow-head"
				/>
				<path d="M50,10L50,66" className="arrow-tail" />
			</svg>
		</span>
	);
};

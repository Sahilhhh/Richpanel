import React from "react";

function Chart({ className, fill }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<title>ionicons-v5-p</title>
			<polygon
				points='496 496 16 496 16 16 48 16 48 464 496 464 496 496'
				fill={fill}
			/>
			<path d='M192,432H80V208H192Z' fill={fill} />
			<path d='M336,432H224V160H336Z' fill={fill} />
			<path d='M479.64,432h-112V96h112Z' fill={fill} />
		</svg>
	);
}

export default Chart;

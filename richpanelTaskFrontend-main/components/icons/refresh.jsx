import React from "react";

function Refresh({ className, fill }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<title>ionicons-v5-b</title>
			<path
				d='M320,146s24.36-12-64-12A160,160,0,1,0,416,294'
				fill={fill}
				stroke='#000'
				strokeLinecap='square'
				strokeMiterlimit='10'
				strokeWidth='40px'
			/>
			<polyline
				points='256 58 336 138 256 218'
				fill={fill}
				stroke='#000'
				strokeLinecap='square'
				strokeMiterlimit='10'
				strokeWidth='40px'
			/>
		</svg>
	);
}

export default Refresh;

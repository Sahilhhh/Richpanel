import React from "react";

function Logout({ className, fill = "none" }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<title>ionicons-v5-o</title>
			<path
				d='M304,336v40a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V136a40,40,0,0,1,40-40H256c22.09,0,48,17.91,48,40v40'
				fill={"none"}
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='40px'
			/>
			<polyline
				points='368 336 448 256 368 176'
				fill={"none"}
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='40px'
			/>
			<line
				x1='176'
				y1='256'
				x2='432'
				y2='256'
				fill={"none"}
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='40px'
			/>
		</svg>
	);
}

export default Logout;

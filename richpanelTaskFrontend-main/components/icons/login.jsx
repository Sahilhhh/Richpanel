import React from "react";

function Login({ className, fill }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			viewBox='0 0 512 512'>
			<title>ionicons-v5-o</title>
			<path
				d='M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336'
				fill={"none"}
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='40px'
			/>
			<polyline
				points='288 336 368 256 288 176'
				fill={"none"}
				stroke={fill}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='40px'
			/>
			<line
				x1='80'
				y1='256'
				x2='352'
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

export default Login;
